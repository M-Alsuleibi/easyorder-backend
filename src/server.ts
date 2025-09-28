import app from "./app";
import dotenv from "dotenv";
import { AppDataSource } from "./configs/database";

dotenv.config({ path: ".env.dev" });
const PORT = process.env.PORT || 3000;

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
