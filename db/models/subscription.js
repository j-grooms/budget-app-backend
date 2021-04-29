'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {

    static associate(models) {
      Subscription.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Subscription.init({
    userId: DataTypes.INTEGER,
    service: DataTypes.STRING,
    company: DataTypes.STRING,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};
