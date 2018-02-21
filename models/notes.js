
module.exports = (sequelize, DataTypes) => {
  const notes = sequelize.define('notes', {
    noteIndex: DataTypes.INTEGER,
    noteTitle: DataTypes.STRING,
    noteContent: DataTypes.STRING,
  }, {});
  notes.associate = function (models) {
    // associations can be defined here
  };
  return notes;
};
