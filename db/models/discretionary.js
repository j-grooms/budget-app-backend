"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Discretionary extends Model {

		static associate(models) {
			Discretionary.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Discretionary.init(
		{
			userId: DataTypes.INTEGER,
			service: DataTypes.STRING,
			company: DataTypes.STRING,
			amount: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Discretionary",
		}
	);
	return Discretionary;
};
