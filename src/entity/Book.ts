import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserBooks } from "./UserBooks";

@Entity()
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { nullable: false, length: 250 })
  name: string;

  @Column("int", { nullable: false })
  price: number;

  @OneToMany(() => UserBooks, (userBooks) => userBooks.book)
  userBooks: UserBooks;
}
