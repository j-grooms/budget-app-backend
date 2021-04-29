"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Subscription extends Model {
		static associate(models) {
			Subscription.belongsTo(models.User, { foreignKey: "userId" });
		}
	}
	Subscription.init(
		{
			userId: { type: DataTypes.INTEGER, allowNull: false },
			type: { type: DataTypes.STRING, allowNull: false },
			company: { type: DataTypes.STRING, allowNull: false },
			amount: { type: DataTypes.INTEGER, allowNull: false },
		},
		{
			sequelize,
			modelName: "Subscription",
		}
	);
	return Subscription;
};
