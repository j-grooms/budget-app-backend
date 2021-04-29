'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Discretionaries", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			userId: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: { model: "Users" },
			},
			service: {
				type: Sequelize.STRING,
			},
			company: {
				type: Sequelize.STRING,
			},
			amount: {
				type: Sequelize.INTEGER,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Discretionaries');
  }
};
