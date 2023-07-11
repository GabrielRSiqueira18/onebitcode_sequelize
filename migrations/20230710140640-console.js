'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("consoles", {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			brand: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			gameId: {
				type: Sequelize.INTEGER,
				references: {
					model: "games",
					key: "id",
				},
				onUpdate: "CASCADE",
				onDelete: "CASCADE",
			},
			createdAt: {
				type: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
			},
		})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("consoles")
  }
};
