import { AppDataSource } from "./configs/database";

export const initializeApp = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Database initialization failed:", err);
    process.exit(1);
  }
};