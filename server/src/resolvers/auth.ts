import {
  Arg,
  Ctx,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql"
import { BaseEntity, getRepository } from "typeorm"
import { Post } from "../entities/Post"
import { Tag } from "../entities/Tag"
import MyContext from "../types/types"
// import { Tag } from "../entities/Tag";

@Resolver(Post)
export class PostResolver extends BaseEntity {
  // login
  @Mutation(() => Boolean)
  async login(
    @Arg("id", () => String) id: string,
    @Arg("password", () => String) password: string,
    @Ctx() { req }: MyContext
  ): Promise<Boolean> {
    if (id === "dwax1324" && password === "1234") {
      req.session.userId = "dwax1324"
      return true
    } else return false
  }

  // check if logged in
  @Query(() => Boolean)
  async me(@Ctx() { req }: MyContext): Promise<Boolean> {
    if (req.session.userId === "dwax1324") return true
    else return false
  }

  // logout
  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie("sid")
        if (err) {
          resolve(false)
          return
        }
        resolve(true)
      })
    )
  }
}
