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
const auth_1 = require("./resolvers/auth");
const tagpost_1 = require("./resolvers/tagpost");
const Post_1 = require("./entities/Post");
const Tag_1 = require("./entities/Tag");
const ioredis_1 = __importDefault(require("ioredis"));
require("dotenv/config");
const constants_1 = require("../constants");
require("reflect-metadata");
const TagPost_1 = require("./entities/TagPost");
const tagsLoader_1 = require("./utils/tagsLoader");
const postsLoader_1 = require("./utils/postsLoader");
const main = async () => {
    const conn = await typeorm_1.createConnection({
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [Post_1.Post, Tag_1.Tag, TagPost_1.TagPost],
        logging: true,
        synchronize: true,
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
            resolvers: [hello_1.HelloResolver, auth_1.PostResolver, tagpost_1.TagPostResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({
            req,
            res,
            redis,
            tagsLoader: tagsLoader_1.createTagsLoader(),
            postsLoader: postsLoader_1.createPostsLoader(),
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