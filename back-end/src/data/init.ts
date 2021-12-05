import User from '../models/User';

export const dbInit = async ({ isDev }: { isDev: boolean }) => {
  await User.sync({ alter: isDev });
};
