const { sequelize, DataTypes } = require('../helpers/sequelizedb');

const Order = sequelize.define("order", {
  id: {
    type: DataTypes.INTEGER,
    field: "id",
    autoIncrement: true,
    primaryKey: true,
  },
  buyer_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyer_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyer_address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyer_postalcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyer_city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  buyer_country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  basket: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  value: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  payment_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_paid: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = {
  Order
};
