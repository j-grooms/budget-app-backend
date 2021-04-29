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
			userId: { type: DataTypes.INTEGER, allowNull: false },
			type: { type: DataTypes.STRING, allowNull: false },
			company: { type: DataTypes.STRING, allowNull: false },
			amount: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "Mandatory",
		}
	);
	return Mandatory;
};
