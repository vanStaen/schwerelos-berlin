const { sequelize, DataTypes } = require('../helpers/sequelizedb');

const ArtistGL = sequelize.define("artistGL", {
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
  artist: {
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
  partyId: {
    type: DataTypes.INTEGER,
    required: true,
  },
  numberOfGuestList: {
    type: DataTypes.INTEGER,
    required: true,
  },
  numberOfFriendList: {
    type: DataTypes.INTEGER,
    required: true,
  }
});

module.exports = {
  ArtistGL
};
