import { Sequelize } from 'sequelize';

import getEnv from '#root/helpers/getEnv';

const DB_URI = getEnv('DB_URI');

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: 'utf8',
    multipleStatements: true,
  },
  logging: false,
});

export default sequelize;
