import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entity/*.ts"],
  migrations: [__dirname + "/migration/*.ts"],
  subscribers: [],
});
