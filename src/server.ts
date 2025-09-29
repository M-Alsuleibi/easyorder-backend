import app from "./app";
import dotenv from "dotenv";
import {
  DevDataSource,
  TestDataSource,
  ProdDataSource,
} from "./configs/database";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.prod"
    : process.env.NODE_ENV === "test"
      ? ".env.test"
      : ".env.dev";

dotenv.config({ path: envFile });

const PORT = process.env.PORT || 3000;

const AppDataSource =
  process.env.NODE_ENV === "production"
    ? ProdDataSource
    : process.env.NODE_ENV === "test"
      ? TestDataSource
      : DevDataSource;

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

//app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
