import { resolve } from 'path';
import { Sequelize } from 'sequelize';

const sequelizeConnection = new Sequelize({
  dialect: 'sqlite',
  storage: resolve(__dirname, '../../data.sqlite'),
  logging: false,
});

export default sequelizeConnection;
