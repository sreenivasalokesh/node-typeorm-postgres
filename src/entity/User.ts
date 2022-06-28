import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  ManyToMany,
} from "typeorm";
import { Book } from "./Book";
import { College } from "./College";
import { Library } from "./Library";
import { UserBooks } from "./UserBooks";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("varchar", { length: 200, nullable: false })
  firstName: string;

  @Column("varchar", { length: 200, nullable: false })
  lastName: string;

  @Column("varchar", { length: 400, nullable: false })
  email: string;

  @OneToMany(() => UserBooks, (userbooks) => userbooks.user)
  books: UserBooks[]; //Its plural, array as it is referencing to many Books

  @OneToOne(() => College, (college) => college.user)
  college: College;

  @ManyToMany(() => Library, (library) => library.users)
  libraries: Library[];
}
