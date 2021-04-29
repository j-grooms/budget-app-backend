'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Saving extends Model {

    static associate(models) {
      Saving.belongsTo(models.User, { foreignKey: "userId" });
    }
  };
  Saving.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Saving',
  });
  return Saving;
};
