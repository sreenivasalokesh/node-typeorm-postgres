import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class College {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  city: string;

  @OneToOne(() => User, (user) => user.id, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
