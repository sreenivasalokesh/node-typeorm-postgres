import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Library } from "../entity/Library";
import { User } from "../entity/User";

export class UserLibraryController {
  private libraryRepository = AppDataSource.manager.getRepository(Library);
  private userRepository = AppDataSource.manager.getRepository(User);

  async libraryUsers(request: Request, response: Response, next: NextFunction) {
    return this.libraryRepository.find({
      select: {
        users: true,
      },
    });
  }

  async userLibraries(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    return this.userRepository.find({
      select: {
        libraries: true,
      },
    });
  }

  async saveUsersLibraries(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    console.log("###saveUsersLibraries");
    const user = await this.userRepository.findOneBy({
      id: request.body.userId,
    });

    console.log("#####request.params.libraryId: ", request.body.libraryId);
    const library = await this.libraryRepository.findOneBy({
      id: request.body.libraryId,
    });

    console.log("####library: ", JSON.stringify(library));

    library.users = library.users ? [...library.users, user] : [user];

    //library.users = [...library.users, user];
    return await this.libraryRepository.save(library);
  }

  async saveLibrary(request: Request, response: Response, next: NextFunction) {
    console.log("###saveLibrary");
    return await this.libraryRepository.save(request.body);
  }
}

import { MigrationInterface, QueryRunner } from "typeorm";

export class PostRefactoringTIMESTAMP implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "title" TO "name"`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" RENAME COLUMN "name" TO "title"`
    ); // reverts things made in "up" method
  }
}
