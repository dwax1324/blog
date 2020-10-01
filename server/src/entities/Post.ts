import {Field,Int,ObjectType} from 'type-graphql'
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, CreateDateColumn, Timestamp } from 'typeorm';


@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @CreateDateColumn()
  updatedAt: Date;
}