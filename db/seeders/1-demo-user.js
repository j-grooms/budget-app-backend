"use strict";
const bcrypt = require("bcryptjs");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Users",
			[
				{
					username: "Demo-lition",
					email: "demo@user.io",
					hashedPassword: bcrypt.hashSync("password"),
                    firstName: "Demo",
                    lastName: "User",
                    monthlyIncome: 2000
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		const Op = Sequelize.Op;
		return queryInterface.bulkDelete("Users", null, {});
	},
};
