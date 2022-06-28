import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { User } from "../entity/User";
import { UserBooks } from "../entity/UserBooks";

export class UserBookController {
  private userbookRepository = AppDataSource.manager.getRepository(UserBooks);
  private userRepository = AppDataSource.manager.getRepository(User);
  private bookRepository = AppDataSource.manager.getRepository(Book);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userbookRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userbookRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const userId = request.body.userId;
    const bookId = request.body.bookId;

    console.log("userId", userId);
    console.log("bookId", bookId);

    const user = await this.userRepository.findOne({ where: { id: userId } });
    const book = await this.bookRepository.findOne({ where: { id: bookId } });

    const userBook = new UserBooks();
    userBook.user = user;
    userBook.book = book;

    return this.userbookRepository.save(userBook);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userbookToRemove = await this.userbookRepository.findOneBy({
      id: request.params.id,
    });
    await this.userbookRepository.remove(userbookToRemove);
  }
}
