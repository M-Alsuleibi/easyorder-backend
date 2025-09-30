import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";

dotenv.config({ path: ".env.dev" });
export const DevDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: checkEnvVariables("DB_USERNAME"),
  password: checkEnvVariables("DB_PASSWORD"),
  database: process.env.DB_NAME || "easyorder",
  synchronize: false,
  entities: [User],
});

dotenv.config({ path: ".env.test" });
export const TestDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: checkEnvVariables("DB_USERNAME"),
  password: checkEnvVariables("DB_PASSWORD"),
  database: process.env.DB_NAME || "easyorder_test",
  synchronize: false,
  entities: [User],
});

dotenv.config({ path: ".env.prod" });
export const ProdDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: checkEnvVariables("DB_USERNAME"),
  password: checkEnvVariables("DB_PASSWORD"),
  database: process.env.DB_NAME || "easyorder_prod",
  synchronize: false,
  entities: [User],
});

function checkEnvVariables(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `${name} is required and cannot be empty.`
    );
  }
  return value;
}
