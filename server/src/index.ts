import express from 'express';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server-express';
import session from 'express-session';
import connectRedis from 'connect-redis';
import { buildSchema} from 'type-graphql';
import { HelloResolver } from './resolvers/hello';
import { PostResolver } from './resolvers/post';
import cors from 'cors';
import { Post } from './entities/Post';
import Redis from 'ioredis'




// async main꼭 써줘야 await쓸 수 있다. 안그럼 ts에서 top-level promise error 발생 -1
const port = 4000;
const main = async() => {
  const app = express();

  //redis 

  const RedisStore = connectRedis(session);
  const redis = new Redis("127.0.0.1:6379");

  
  // app.use((req, res, next)=> {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  //   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  //   if (req.method === 'OPTIONS') {
  //     return res.sendStatus(200);
  //   }
  //   next();
  // })
  app.set('trust proxy', 1);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000"
    }), 
    session({
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
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10years
        httpOnly: true,
        secure:false
      },
    })
  );
  


  const conn = await createConnection({
    type: "postgres",
    url: "postgresql://postgres:postgres@localhost:5432/blogDB2",
    entities: [Post],
    logging: true,
    synchronize: true,
  });




  //await -2
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
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
    // 라우트 / 렌더링
}



main().catch((err) => console.error(err));