import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { UserBooksLibraryVw } from "../entity/UserBooksLibraryVw";

export class UserBookLibrraryVwController {
  private userBookLibrraryVwRepository =
    AppDataSource.manager.getRepository(UserBooksLibraryVw);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userBookLibrraryVwRepository.find();
  }
}
