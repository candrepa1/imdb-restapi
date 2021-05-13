"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("contentactors", {
			actor_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: "actors",
					key: "id",
				},
			},
			content_id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				references: {
					model: "contents",
					key: "id",
				},
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
		await queryInterface.dropTable("contentactors");
	},
};
