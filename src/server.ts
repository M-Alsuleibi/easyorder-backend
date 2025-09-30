import app from "./app";
import dotenv from "dotenv";
import {
  DevDataSource,
  TestDataSource,
  ProdDataSource,
} from "./configs/database";

let envFile;

if (process.env.NODE_ENV === "production") {
  envFile = ".env.prod";
} else if (process.env.NODE_ENV === "test") {
  envFile = ".env.test";
} else {
  envFile = ".env.dev";
}

dotenv.config({ path: envFile, override: true });

const PORT = process.env.PORT || 3000;

let AppDataSource;

if (process.env.NODE_ENV === "production") {
  AppDataSource = ProdDataSource;
} else if (process.env.NODE_ENV === "test") {
  AppDataSource = TestDataSource;
} else {
  AppDataSource = DevDataSource;
}

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
