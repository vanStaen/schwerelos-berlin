const { sequelize, DataTypes } = require('../helpers/sequelizedb');

const Gig = sequelize.define("gig", {
  id: {
    type: DataTypes.INTEGER,
    field: "id",
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'tba',
  },
  raEventNumber: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = {
  Gig
};
