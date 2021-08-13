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
        allowNull: true,
        type: DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'professors',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      moduleName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      coefficient: {
        allowNull: false,
        type: DataTypes.DECIMAL(5, 4),
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

module.exports.down = (queryInterface) => queryInterface.dropTable('modules');
