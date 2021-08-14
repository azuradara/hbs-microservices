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
      unique: true,
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
      unique: true,
    },
    matricule: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
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
    moduleName: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
    coefficient: {
      allowNull: false,
      type: DataTypes.DECIMAL(5, 4),
    },
  },
  { modelName: 'modules', sequelize }
);

export class Junction extends Model {}
Junction.init({}, { modelName: 'junctions', sequelize });

sequelize
  .authenticate()
  .then(async () => {
    defineRelations();
  })
  .catch((e) => {
    console.error(e);
  });

const defineRelations = () => {
  const common = (options) => ({
    ...options,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  });

  Module.belongsTo(Professor, common({ foreignKey: 'professorId' }));
  Professor.hasMany(Module);

  Student.belongsToMany(Module, {
    through: 'junctions',
    foreignKey: 'studentId',
    otherKey: 'moduleId',
  });

  Module.belongsToMany(Student, {
    through: 'junctions',
    otherKey: 'studentId',
    foreignKey: 'moduleId',
  });

  Junction.belongsTo(Student, { foreignKey: 'studentId' });
  Junction.belongsTo(Module, { foreignKey: 'moduleId' });
};
