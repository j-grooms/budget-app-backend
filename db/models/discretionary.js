"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Discretionary extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
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
