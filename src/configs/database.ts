import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.prod"
    : process.env.NODE_ENV === "test"
      ? ".env.test"
      : ".env.dev";

dotenv.config({ path: envFile });

function checkEnvVariables(name: string): string {
  const value = process.env[name];
  if (!value || value.trim() === "") {
    throw new Error(
      `Environment variable ${name} is required and cannot be empty.`
    );
  }
  return value;
}

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: checkEnvVariables("DB_USERNAME"),
  password: checkEnvVariables("DB_PASSWORD"),
  database: process.env.DB_NAME || "easyorder",
  synchronize: false,
  entities: [User],
  migrations: ["src/database/migrations/**/*.ts"],
});
