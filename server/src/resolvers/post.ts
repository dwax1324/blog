import { Post } from "../entities/Post";
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import MyContext from "../types";
import { getConnection } from "typeorm";
import "dotenv/config";


@InputType()
class postInput{
    @Field()
    title: string
    @Field()
    description: string
}


@Resolver(Post)
export class PostResolver {
  // create
  @Mutation(() => Post)
  async createPost(@Arg("input") input: postInput): Promise<Post> {
    return Post.create({
      ...input,
    }).save();
  }

  // read one
  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    return await Post.findOne(id);
  }

  // read all
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    const post = await getConnection().query(`
            select p.*
            from post p
            order by p."createdAt" DESC
        `);
    return await post;
  }

  // update
  @Mutation(() => Post)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => postInput) input: postInput
  ): Promise<Post> {
    const post = await Post.findOne({ id });

    const createdAt = post?.createdAt;
    const updatedAt = new Date();

    if (!post) throw new Error("그런 포스트는 존재하지 않아!");
    Object.assign(post, {
      ...input,
      createdAt: createdAt,
      updatedAt: updatedAt,
    });
    await post?.save();

    return post;
  }

  // delete

  @Mutation(() => Boolean)
  async deletePost(@Arg("id", () => Int) id: number): Promise<Boolean> {
    const post = await Post.findOne({ where: { id } });
    if (!post) throw new Error("그런 포스트는 존재하지 않아!");
    await post.remove();
    return true;
  }

  // login

  
  @Mutation(() => Boolean)
  async login(
    @Arg("id", () => String) id: string,
    @Arg("password", () => String) password: string,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    const ID = process.env.USER_ID as string;
    const PSWD = process.env.PASSWORD as string;
    if (id === ID && password === PSWD) {
      req.session.userId = ID;
      return true;
    } else return false;
  }

  // check if logged in
  @Query(() => Boolean)
  async me(@Ctx() { req }: MyContext): Promise<Boolean> {
      const ID = process.env.USER_ID as string;
    if (req.session.userId === ID) return true;
    else return false;
  }

  // logout
  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie(process.env.SESSION_NAME as string);
        if (err) {
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
