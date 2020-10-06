import MyContext from "src/types/types"
import { Ctx, Field, ID, Int, ObjectType } from "type-graphql"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm"
import { Tag } from "./Tag"
import { TagPost } from "./TagPost"
// import { TagPost } from "./TagPost"



@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field(()=>ID)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title!: string

  @Field()
  @Column()
  description: string

  @Field()
  @Column({ nullable: true })
  thumbnail: string

  // @ManyToMany((type) => Tag)
  // @JoinTable({name:"tag-post"})
  // tags: Tag[]

  @OneToMany(() => TagPost, (tp) => tp.post)
  tagConnection: Promise<TagPost[]>

  @Field(() => [Tag] ,{nullable:true})
  async tags(@Ctx() { tagsLoader }: MyContext): Promise<Tag[]> {
    return tagsLoader.load(this.id) as any
  }

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date
}