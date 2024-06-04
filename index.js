import { validateEnv } from './utils/env.js';
validateEnv();

import { initMongo } from './db/mongo.js';
import { initServer } from './server.js';

(async () => {
  await initMongo();
  initServer();
})();
