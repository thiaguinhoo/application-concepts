import { cleanEnv, num } from 'envalid';

import app from './app';

cleanEnv(process.env, { SERVER_PORT: num() });

const serverPort = process.env.SERVER_PORT || 3333;

app.listen(serverPort, () => console.log(`> Server ready on: ${serverPort}`));
