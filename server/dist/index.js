"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const apollo_server_express_1 = require("apollo-server-express");
const express_session_1 = __importDefault(require("express-session"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const type_graphql_1 = require("type-graphql");
const hello_1 = require("./resolvers/hello");
const post_1 = require("./resolvers/post");
const cors_1 = __importDefault(require("cors"));
const Post_1 = require("./entities/Post");
const ioredis_1 = __importDefault(require("ioredis"));
const port = 4000;
const main = async () => {
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default("127.0.0.1:6379");
    app.set('trust proxy', 1);
    app.use(cors_1.default({
        credentials: true,
        origin: "http://localhost:3000"
    }), express_session_1.default({
        name: "qid",
        secret: "qrqwrqrqwr",
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            sameSite: true,
            maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
            httpOnly: true,
            secure: false
        },
    }));
    const conn = await typeorm_1.createConnection({
        type: "postgres",
        url: "postgresql://postgres:postgres@localhost:5432/blogDB2",
        entities: [Post_1.Post],
        logging: true,
        synchronize: true,
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await type_graphql_1.buildSchema({
            resolvers: [hello_1.HelloResolver, post_1.PostResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
        }),
    });
    apolloServer.applyMiddleware({
        app,
        cors: false
    });
    app.listen(port, () => {
        console.log("listening from " + port);
    });
};
main().catch((err) => console.error(err));
//# sourceMappingURL=index.js.map