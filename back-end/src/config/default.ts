export default {
  server: {
    port: process.env.SERVER_PORT,
  },
  secretKey: process.env.SECRET_KEY,
  isDev: process.env.NODE_ENV !== 'production',
};
