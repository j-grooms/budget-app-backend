"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Mandatories",
			[
				{
					userId: 1,
					type: "utility",
					company: "Olney Powerworks",
					amount: 150,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					type: "utility",
					company: "Jalbert Brothers Waste Disposal",
					amount: 15,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					userId: 1,
					type: "rent",
					company: "Tenpenny Tower",
					amount: 1200,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Mandatories", null, {});
	},
};
