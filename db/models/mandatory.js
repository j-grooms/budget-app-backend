"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Mandatory extends Model {

		static associate(models) {
			Mandatory.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Mandatory.init(
		{
			userId: DataTypes.INTEGER,
			service: DataTypes.STRING,
			company: DataTypes.STRING,
			amount: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Mandatory",
		}
	);
	return Mandatory;
};
