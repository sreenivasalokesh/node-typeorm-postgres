import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { User } from "../entity/User";

export class BookController {
  private bookRepository = AppDataSource.manager.getRepository(Book);
  private userRepository = AppDataSource.manager.getRepository(User);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.bookRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let bookToRemove = await this.bookRepository.findOneBy({
      id: request.params.id,
    });
    await this.bookRepository.remove(bookToRemove);
  }
}
