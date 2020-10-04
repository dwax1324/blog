import MyContext from "src/types/types"
import { Ctx, Field, Int, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  ObjectID,
  ObjectIdColumn,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm"
import { Post } from "./Post"
import { TagPost } from "./TagPost"

@ObjectType()
@Entity()
export class Tag extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  text: string

  @OneToMany(() => TagPost, (tp) => tp.tag)
  postConnection: Promise<TagPost[]>

  @Field(() => [Post], { nullable: true })
  async posts(@Ctx() { postsLoader }: MyContext): Promise<Post[]> {
    const load = await postsLoader.load(this.id) as any
    return load
  }

  @Field(() => Int, { nullable: true })
  async postsLength(@Ctx() { postsLoader }: MyContext): Promise<number> {
    const load = await postsLoader.load(this.id) as any
    if (load?.length === undefined) return 0
    return load.length
  }




  //재귀
  @ManyToOne(() => Tag, (tag) => tag.childCategories)
  parentCategory: Tag

  @OneToMany(() => Tag, (tag) => tag.parentCategory)
  childCategories: Tag[]
}
