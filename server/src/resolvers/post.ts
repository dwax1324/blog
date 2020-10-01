import { Post } from "../entities/Post";
import { Arg, Ctx, Field, InputType, Int, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import MyContext from "../types";
import { getConnection, Timestamp } from "typeorm";


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
    async createPost(@Arg('input') input: postInput): Promise<Post> {
        return Post.create({
            ...input
        }).save()
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
        return await post
    }

    // update
    @Mutation(() => Post)
    async updatePost(
        @Arg('id', () => Int) id: number,
        @Arg('input', () => postInput) input: postInput): Promise<Post> {
        const post = await Post.findOne({ id });

        const createdAt = post?.createdAt
        const updatedAt = new Date();


        if (!post) throw new Error('그런 포스트는 존재하지 않아!')
        Object.assign(post, {
          ...input,
            createdAt: createdAt,
          updatedAt: updatedAt
        });
        await post?.save();

        return post;

    }


    // delete

    @Mutation(() => Boolean)
    async deletePost(@Arg('id', () => Int) id: number): Promise<Boolean> {
        const post = await Post.findOne({ where: { id } });
        if (!post) throw new Error('그런 포스트는 존재하지 않아!')
        await post.remove();
        return true
    }


    

    // login
    @Mutation(() => Boolean)
    async login(
        @Arg('id', () => String) id: string,
        @Arg("password", () => String) password: string,
        @Ctx() { req }: MyContext
    ): Promise<Boolean> {
        if (id === "dwax1324" && password === "qeszc24$") {
            req.session.userId = 'dwax1324';
            return true;
        }
        else return false;
    }

    // check if logged in
    @Query(() => Boolean)
    async me(
        @Ctx() { req }: MyContext
    ): Promise<Boolean> {
        if (req.session.userId === 'dwax1324') return true;
        return false;
    }

    // logout
    @Mutation(() => Boolean)
    async logout(
        @Ctx() { req, res }: MyContext
    ) {
        return new Promise((resolve) => req.session.destroy(err => {
            res.clearCookie('qid');
            if (err) {
                resolve(false);
                return;
            }
            resolve(true);
        }))
    

        

    }
}
