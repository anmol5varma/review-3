
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('notes', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    noteIndex: {
      type: Sequelize.INTEGER,
    },
    noteTitle: {
      type: Sequelize.STRING,
    },
    noteContent: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('notes'),
};
