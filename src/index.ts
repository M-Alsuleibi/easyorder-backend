import { AppDataSource } from "./configs/database";

export const initializeApp = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.warn("Database connected successfully!");
  } catch (err) {
    console.error("Database initialization failed:");
    console.error(err);
    process.exit(1);
  }
};
