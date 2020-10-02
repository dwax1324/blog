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
const Post_1 = require("./entities/Post");
const ioredis_1 = __importDefault(require("ioredis"));
require("dotenv/config");
const constants_1 = require("../constants");
const path_1 = __importDefault(require("path"));
const main = async () => {
    const conn = await typeorm_1.createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [Post_1.Post],
        logging: true,
        synchronize: false,
        migrations: [path_1.default.join(__dirname, "./migrations/*")],
    });
    const app = express_1.default();
    const RedisStore = connect_redis_1.default(express_session_1.default);
    const redis = new ioredis_1.default(process.env.REDIS_URL);
    app.set("trust proxy", 1);
    app.use(express_session_1.default({
        name: process.env.SESSION_NAME,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: new RedisStore({
            client: redis,
            disableTouch: true,
        }),
        cookie: {
            sameSite: "lax",
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true,
            secure: constants_1.__prod__,
            domain: constants_1.__prod__ ? ".woojong.xyz" : undefined,
        },
    }));
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
        cors: { origin: process.env.CORS_ORIGIN, credentials: true },
    });
    app.listen(process.env.PORT, () => {
        console.log("listening from " + process.env.PORT);
    });
};
main().catch((err) => {
    console.error(err);
});
//# sourceMappingURL=index.js.map