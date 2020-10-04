import DataLoader from "dataloader"
import { In } from "typeorm"
import { Tag } from "../entities/Tag"
import { TagPost } from "../entities/TagPost"

const batchTags = async (postIds: number[]) => {
  const tagPosts = await TagPost.find({
    join: {
      alias: "tagPost",
      innerJoinAndSelect: {
        tag: "tagPost.tag",
      },
    },
    where: {
      postId: In(postIds),
    },
  })

  const postIdToTag: { [key: number]: Tag[] } = {}

  /*
  {
    authorId: 1,
    bookId: 1,
    __author__: { id: 1, name: 'author1' }
  }
  */
  tagPosts.forEach((ab) => {
    if (ab.postId in postIdToTag) {
      postIdToTag[ab.postId].push((ab as any).__tag__)
    } else {
      postIdToTag[ab.postId] = [(ab as any).__tag__]
    }
  })

  return postIds.map((ab) => postIdToTag[ab])
}

export const createTagsLoader = () => new DataLoader(batchTags as any)
