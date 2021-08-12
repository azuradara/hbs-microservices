module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'students',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    }
  );
};

module.exports.down = (queryInterface) => queryInterface.dropTable('students');
