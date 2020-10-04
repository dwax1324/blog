import { Field, Int } from "type-graphql"
import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm"
import { Post } from "./Post"
import { Tag } from "./Tag"

@Entity()
export class TagPost extends BaseEntity {
  @Field(() => Int)
  @PrimaryColumn()
  tagId: number

  @Field(() => Int)
  @PrimaryColumn()
  postId: number

  @ManyToOne(() => Tag, (tag) => tag.postConnection, { primary: true })
  @JoinColumn({ name: "tagId" })
  tag: Promise<Tag>

  @ManyToOne(() => Post, (post) => post.tagConnection, { primary: true })
  @JoinColumn({ name: "postId" })
  post: Promise<Post>
}
