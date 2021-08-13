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

export class Professor extends Model {}
Professor.init(
  {
    fullName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    cin: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    matricule: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    registrationDate: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  { modelName: 'professors', sequelize }
);

export class Module extends Model {}
Module.init(
  {
    professorId: {
      allowNull: false,
      references: {
        model: 'professors',
        key: 'id',
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    moduleName: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    coefficient: {
      allowNull: false,
      type: DataTypes.DECIMAL(5, 4),
    },
  },
  { modelName: 'modules', sequelize }
);

export class Junction extends Model {}
Junction.init(
  {
    moduleId: {
      allowNull: false,
      references: {
        model: 'modules',
        key: 'id',
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
    studentId: {
      allowNull: false,
      references: {
        model: 'students',
        key: 'id',
      },
      type: DataTypes.INTEGER.UNSIGNED,
    },
  },
  { modelName: 'junctions', sequelize }
);
