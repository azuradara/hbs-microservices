module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'professors',
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
      matricule: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      registrationDate: {
        allowNull: false,
        type: DataTypes.DATE,
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

module.exports.down = (queryInterface) =>
  queryInterface.dropTable('professors');
