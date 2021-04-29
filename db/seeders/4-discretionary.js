"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Discretionaries",
			[
				{
					userId: 1,
					type: "clothing",
					company: "Underworld Outfitters",
					amount: 50,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					type: "food",
					company: "Wilhelm's Wharf",
					amount: 30,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					type: "entertainment",
					company: "Moonbeam Outdoor Cinema",
					amount: 25,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Discretionaries", null, {});
	},
};
