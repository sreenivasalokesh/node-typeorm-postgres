import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@Entity()
export class UserBooks {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn() //this line is optional for many to one, but needed for one to one
  user: User;

  @ManyToOne(() => Book, (book) => book.id)
  @JoinColumn() //this line is optional for many to one, but needed for one to one
  book: Book;

  @CreateDateColumn()
  cratedDt: Date;

  @UpdateDateColumn()
  updatedDt: Date;
}
