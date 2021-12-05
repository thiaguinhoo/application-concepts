import app from "./app";

const serverPort = process.env.SERVER_PORT || 3333;

app.listen(serverPort, () => console.log(`> Server ready on: ${serverPort}`));
