import { Post } from "../entities/Post"
import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql"
import { Tag } from "../entities/Tag"
import { TagPost } from "../entities/TagPost"
import { getTreeRepository } from "typeorm"

@InputType()
class postInput {
  @Field()
  title: string
  @Field()
  description: string
  @Field()
  thumbnail: string
}

@Resolver()
export class TagPostResolver {
  //read all posts
  @Query(() => [Post])
  async posts() {
    return Post.find({
      order: {
        createdAt:"DESC"
      }
    })
  }
  //read all tags
  @Query(() => [Tag])
  async tags() {
    return Tag.find()
  }

  // read one post
  @Query(() => Post, { nullable: true })
  async post(@Arg("id", () => Int) id: number): Promise<Post | undefined> {
    const post = await Post.findOne({ id: id })
    return post
  }

  // read one tag
  @Query(() => Tag, { nullable: true })
  async tag(@Arg("id", () => Int) id: number): Promise<Tag | undefined> {
    const tag = await Tag.findOne({ id: id })
    return tag
  }

  // update post
  @Mutation(() => Post)
  async updatePost(
    @Arg("id", () => Int) id: number,
    @Arg("input", () => postInput) input: postInput
  ): Promise<Post> {
    const post = await Post.findOne({ id: id })

    const createdAt = post?.createdAt
    const updatedAt = new Date()

    if (!post) throw new Error("그런 포스트는 존재하지 않아!")
    Object.assign(post, {
      title: input.title,
      description: input.description,
      thumbnail: input.thumbnail,
      createdAt: createdAt,
      updatedAt: updatedAt,
    })
    await post?.save()

    return post
  }

  //create post
  @Mutation(() => Post)
  async createPost(@Arg("input") input: postInput) {
    return Post.create({ ...input }).save()
  }

  // create tag
  @Mutation(() => Tag)
  async createTag(@Arg("text") text: string) {
    return Tag.create({ text }).save()
  }

  // add relation tag-post
  @Mutation(() => Boolean)
  async addTagPost(
    @Arg("tagId", () => Int) tagId: number,
    @Arg("postId", () => Int) postId: number
  ) {
    await TagPost.create({ tagId, postId }).save()
    return true
  }

  // delet relation tag-post
  @Mutation(() => Boolean)
  async deleteTagPost(
    @Arg("tagId", () => Int) tagId: number,
    @Arg("postId", () => Int) postId: number
  ) {
    await TagPost.delete({ tagId: tagId, postId: postId })
    return true
  }

  // @Mutation(() => Boolean)
  // async addSubTag(
  //   @Arg("tagText1", () => String) tagText1: string,
  //   @Arg("tagText2", () => String) tagText2: string
  // ) {
  //   const tag1 = await Tag.findOne({ text: tagText1 })
  //   const tag2 = await Tag.findOne({ text: tagText2 })
  //   if (tag2 !== undefined) tag1?.childCategories.push(tag2)
  // }

  //delete post
  @Mutation(() => Boolean)
  async deletePost(@Arg("postId", () => Int) postId: number) {
    await TagPost.delete({ postId })
    await Post.delete({ id: postId })
    return true
  }
  //delete tag
  @Mutation(() => Boolean)
  async deleteTag(@Arg("tagId", () => Int) tagId: number) {
    await TagPost.delete({ tagId })
    await Tag.delete({ id: tagId })
    return true
  }
}
