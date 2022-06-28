import { ViewEntity, ViewColumn, DataSource } from "typeorm";
import { Book } from "./Book";
import { College } from "./College";
import { Library } from "./Library";
import { User } from "./User";

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .getRepository(User)
      .createQueryBuilder("user")
      .leftJoinAndSelect("user.college", "college"),
})
export class UserBooksLibraryVw {}
