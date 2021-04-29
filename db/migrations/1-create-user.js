"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Users", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			username: {
				unique: true,
				type: Sequelize.STRING(32),
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			hashedPassword: {
				type: Sequelize.STRING.BINARY,
				allowNull: false,
			},
			firstName: {
				type: Sequelize.STRING(16),
				allowNull: false,
			},
			lastName: {
				type: Sequelize.STRING(16),
				allowNull: false,
			},
			monthlyIncome: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
				defaultValue: Sequelize.fn("now"),
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Users");
	},
};
