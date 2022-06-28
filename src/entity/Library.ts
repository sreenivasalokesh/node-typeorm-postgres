import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinColumn,
  JoinTable,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Library {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: false }) //unique is set to false(which is also the default) as a city can have have more than one library
  city: string;

  @ManyToMany(() => User, (user) => user.id)
  @JoinTable({
    name: "user_library",
    inverseJoinColumn: { name: "user_id", referencedColumnName: "id" },
    joinColumn: { name: "library_id", referencedColumnName: "id" },
  })
  users: User[];
}
