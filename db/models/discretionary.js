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
			userId: { type: DataTypes.INTEGER, allowNull: false },
			type: { type: DataTypes.STRING, allowNull: false },
			company: { type: DataTypes.STRING, allowNull: false },
			amount: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "Discretionary",
		}
	);
	return Discretionary;
};
