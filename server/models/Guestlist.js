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
  artist: {
    type: DataTypes.STRING,
    required: false,
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
