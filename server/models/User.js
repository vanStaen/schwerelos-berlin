const { sequelize, DataTypes } = require('../helpers/sequelizedb');

const User = sequelize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    field: "id",
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
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
  pwd: {
    type: DataTypes.STRING,
    required: true,
  },
  language: {
    type: DataTypes.STRING,
    default: "de",
  }
});

module.exports = {
  User
};
