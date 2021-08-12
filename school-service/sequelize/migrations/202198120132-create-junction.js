module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'junction',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER.UNSIGNED,
      },
      moduleId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'modules',
          key: 'id',
        },
      },
      studentId: {
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'students',
          key: 'id',
        },
      },
    },
    {
      charset: 'utf8',
    }
  );
};
