import app from "./app";
import { initializeApp } from "./index";

const PORT = process.env.PORT ?? 3000;

const startServer = async (): Promise<void> => {
  await initializeApp();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

void startServer();
