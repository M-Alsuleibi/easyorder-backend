import { DataSource } from "typeorm";

import { env } from "./envConfig";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: "postgres",
<<<<<<< HEAD
  host: env.POSTGRES_USER || "localhost",
  port: Number(env.DB_PORT) || 5432,
  username: env.DB_USERNAME,
  password: env.POSTGRES_PASSWORD,
  database: env.POSTGRES_DB,
=======
  host: checkEnvVariables("POSTGRES_HOST"),
  port: Number(process.env.DB_PORT) || 5432,
  username: checkEnvVariables("POSTGRES_USER"),
  password: checkEnvVariables("POSTGRES_PASSWORD"),
  database: checkEnvVariables("POSTGRES_DB"),
>>>>>>> FC-27
  synchronize: false,
  entities: [User, Tenant, UserRole],
  migrations: ["src/database/migrations/**/*.ts"],
});

