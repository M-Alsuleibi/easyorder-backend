import { AppDataSource } from "./configs/database";
import logger from "./configs/logger";

export const initializeApp = async (): Promise<void> => {
  try {
    
    await AppDataSource.initialize();
    console.warn("Database connected successfully!");
  } catch (err) {
    
    logger.error("Database initialization failed:", err);
    process.exit(1);
  }
};