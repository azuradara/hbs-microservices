module.exports.up = (queryInterface, DataTypes) => {
  return queryInterface.createTable(
    'userSessions',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      userId: {
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        type: DataTypes.UUID,
      },
      expiresAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      charset: 'utf8',
    }
  );
};

module.exports.down = (queryInterface) =>
  queryInterface.dropTable('userSessions');
