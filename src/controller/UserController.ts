import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { College } from "../entity/College";
import { UserBooks } from "../entity/UserBooks";

export class UserController {
  private userRepository = AppDataSource.manager.getRepository(User);
  private collegeRepository = AppDataSource.manager.getRepository(College);
  private userBooksRepository = AppDataSource.manager.getRepository(UserBooks);

  async all(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne({ where: { id: request.params.id } });
  }

  async save(request: Request, response: Response, next: NextFunction) {
    console.log("user-books");
    return this.userRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({
      id: request.params.id,
    });
    return await this.userRepository.remove(userToRemove);
  }

  async saveColleges(request: Request, response: Response, next: NextFunction) {
    console.log("###saveColleges");
    let user = await this.userRepository.findOneBy({
      id: request.params.id,
    });
    const college = new College();
    college.name = request.body.name;
    college.city = request.body.city;
    college.user = user;
    return await this.collegeRepository.save(college);
  }

  async userbooks(request: Request, response: Response, next: NextFunction) {
    console.log("#########Hittitng here");
    return await this.userRepository.find({
      relations: {
        books: {
          book: true,
        },
      },
    });
  }

  async allUserbooks(request: Request, response: Response, next: NextFunction) {
    console.log("#########Hittitng here use book maps");
    return await this.userBooksRepository.find({
      relations: {
        book: true,
        user: true,
      },
    });
  }
}
