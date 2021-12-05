import { DataTypes, Model } from 'sequelize';
import sequelizeConnection from '../data/config';

interface UserAttributes {
  id: number;
  email: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: sequelizeConnection },
);

export default User;
