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
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true
    },
  },
  artistId: {
    type: DataTypes.INTEGER,
    required: false,
  },
  partyId: {
    type: DataTypes.INTEGER,
    required: true,
  },
  listType: {
    type: DataTypes.INTEGER,
    required: true,
  },
  active: {
    type: DataTypes.BOOLEAN,
    default: true,
  }
});

module.exports = {
  Guestlist
};
