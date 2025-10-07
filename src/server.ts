import { env } from "./configs/envConfig";
import app from "./app";
<<<<<<< HEAD
import logger from "./configs/logger";
// import { initializeApp } from "./index";

const startServer = async () => {
  // await initializeApp();
  const PORT = env.PORT || 3000;
=======
import { initializeApp } from "./index";

const PORT = process.env.PORT ?? 3000;

const startServer = async (): Promise<void> => {
  await initializeApp();
>>>>>>> FC-27

  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
};

void startServer();
