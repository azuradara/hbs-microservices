/** Put all the models in a single file to save time */

import { DataTypes, Model } from 'sequelize';

import sequelize from './connection';

export class Student extends Model {}
Student.init(
  {
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cin: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    birthDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    registrationDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    branch: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  { modelName: 'students', sequelize }
);
