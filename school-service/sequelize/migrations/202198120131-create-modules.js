module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'modules',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      professorId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'professors',
          key: 'id',
        },
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
    {
      charset: 'utf8',
    }
  );
};
