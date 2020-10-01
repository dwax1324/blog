import { Request, Response } from "express";
import { Redis } from "ioredis";

type MyContext = {
  req: Request & { session: Express.Session };
  res: Response;
  redis: Redis;
};

export default MyContext;
