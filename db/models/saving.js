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
  Saving.init(
		{
			userId: { type: DataTypes.INTEGER, allowNull: false },
			amount: { type: DataTypes.INTEGER, allowNull: false },
			bank: { type: DataTypes.STRING, allowNull: false },
		},
		{
			sequelize,
			modelName: "Saving",
		}
	);
  return Saving;
};
