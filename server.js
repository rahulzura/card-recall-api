import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import router from './routes/index.js';

const { SERVER_HOST, SERVER_PORT } = process.env;

export const initServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(router);

  app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`✅ Server is running at ${SERVER_HOST}:${SERVER_PORT}.`);
  });
};
