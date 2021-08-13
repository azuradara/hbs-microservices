module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'junctions',
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

module.exports.down = (queryInterface) => queryInterface.dropTable('junction');
