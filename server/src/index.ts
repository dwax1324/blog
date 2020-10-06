import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { buildSchema} from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from "./resolvers/auth"
import { TagPostResolver } from "./resolvers/tagpost"
import cors from 'cors';
import { Post } from './entities/Post';
import { Tag } from "./entities/Tag"
import Redis from 'ioredis'
import bodyParser from "body-parser"
import "dotenv/config";
import { __prod__ } from "../constants";
import path from "path";
import "reflect-metadata"
import { TagPost } from "./entities/TagPost"
import { createTagsLoader } from "./utils/tagsLoader"
import { createPostsLoader } from "./utils/postsLoader"




// async main꼭 써줘야 await쓸 수 있다. 안그럼 ts에서 top-level promise error 발생 -1
const main = async () => {
  const conn = await createConnection({
    type: "postgres",
    url: process.env.DATABASE_URL,
    entities: [Post, Tag, TagPost],
    logging: true,
    synchronize: true,
    // migrations: [path.join(__dirname, "./migrations/*")],
  })


  const app = express()

  const RedisStore = connectRedis(session)
  const redis = new Redis(process.env.REDIS_URL)

  app.set("trust proxy", 1)
 
  app.use(
    session({
      name: process.env.SESSION_NAME,
      secret: process.env.SESSION_SECRET as string,
      resave: false,
      saveUninitialized: false,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        sameSite: "lax",
        maxAge: 1000 * 60 * 60 * 24, // 1day
        httpOnly: true,
        secure: __prod__,
        domain: __prod__ ? ".woojong.xyz" : undefined,
      },
    })
  )


  //await -2
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver, TagPostResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
      redis,
      tagsLoader: createTagsLoader(),
      postsLoader: createPostsLoader(),
    }),
  })
  apolloServer.applyMiddleware({
    app,
    cors: { origin: process.env.CORS_ORIGIN, credentials: true },
  })

  app.listen(process.env.PORT, () => {
    console.log("listening from " + process.env.PORT)
  })
  // 라우트 / 렌더링

}


main().catch((err) => {
  console.error(err);
});