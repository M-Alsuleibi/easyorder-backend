import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { User } from "../entities/User";

dotenv.config({ path: ".env.dev" });

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "easyorder",
  synchronize: true,
  entities: [User],
});
