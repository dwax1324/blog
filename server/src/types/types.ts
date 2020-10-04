import { Request, Response } from "express"
import { Redis } from "ioredis"
import { createPostsLoader } from "../utils/postsLoader"
import { createTagsLoader } from "../utils/tagsLoader"

type MyContext = {
  req: Request & { session: Express.Session }
  res: Response
  redis: Redis
  tagsLoader: ReturnType<typeof createTagsLoader>
  postsLoader: ReturnType<typeof createPostsLoader>
}

export default MyContext
