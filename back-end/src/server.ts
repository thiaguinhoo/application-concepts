process.env['NODE_CONFIG_DIR'] = __dirname + '/config';
import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';
import config from 'config';

import app from './app';
import { dbInit } from './data/init';

cleanEnv(process.env, { SERVER_PORT: num(), SECRET_KEY: str() });

const serverPort = config.get('server.port');
const isDev: boolean = config.get('isDev');

async function main() {
  try {
    await dbInit({ isDev });
    app.listen(serverPort, () =>
      console.log(`> Server ready on: ${serverPort}`),
    );
  } catch (err) {
    console.error(err);
  }
}

main();
