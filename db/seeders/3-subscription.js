"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Subscriptions",
			[
				{
					userId: 1,
					type: "newspaper",
					company: "Capital Post",
					amount: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					type: "misc",
					company: "Vault-Tec",
					amount: 100,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Subscriptions", null, {});
	},
};
