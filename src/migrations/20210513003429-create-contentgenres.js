"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("contentgenres", {
			genre_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			content_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
			},
			active: {
				type: Sequelize.BOOLEAN,
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("contentgenres");
	},
};
