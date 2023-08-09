const { sequelize, DataTypes } = require('../helpers/sequelizedb');

const Guestlist = sequelize.define("guestlist", {
  id: {
    type: DataTypes.INTEGER,
    field: "id",
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
    validate: {
      isEmail: true
    },
  },
  artist: {
    type: DataTypes.STRING,
    required: true,
  },
  partyId: {
    type: DataTypes.INTEGER,
    required: true,
  },
  listType: {
    type: DataTypes.INTEGER,
    required: true,
  }
});

module.exports = {
  Guestlist
};
