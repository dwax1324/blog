import DataLoader from "dataloader"
import { Post } from "src/entities/Post"
import { In } from "typeorm"
import { TagPost } from "../entities/TagPost"

const batchPosts = async (tagIds: number[]) => {
  const tagPosts = await TagPost.find({
    join: {
      alias: "tagPost",
      innerJoinAndSelect: {
        post: "tagPost.post",
      },
    },
    where: {
      tagId: In(tagIds),
    },
  })

  const tagIdToPost: { [key: number]: Post[] } = {}

  /*
  {
    authorId: 1,
    bookId: 1,
    __author__: { id: 1, name: 'author1' }
  }
  */
  tagPosts.forEach((ab) => {
    if (ab.tagId in tagIdToPost) {
      tagIdToPost[ab.tagId].push((ab as any).__post__)
    } else {
      tagIdToPost[ab.tagId] = [(ab as any).__post__]
    }
  })

  return tagIds.map((ab) => tagIdToPost[ab])
}

export const createPostsLoader = () => new DataLoader(batchPosts as any)
