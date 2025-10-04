import { env } from "./configs/envConfig";
import app from "./app";
// ? import { initializeApp } from "./index";

const startServer = async () => {
  // ? await initializeApp();
  const PORT = env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
