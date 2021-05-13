"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("contents", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
				references: {
					model: "ContentActors",
					key: "content_id",
				},
				references: {
					model: "ContentDirectors",
					key: "content_id",
				},
				references: {
					model: "ContentGenres",
					key: "content_id",
				},
			},
			title: {
				type: Sequelize.STRING,
			},
			description: {
				type: Sequelize.TEXT,
			},
			total_seasons: {
				type: Sequelize.INTEGER,
			},
			imdb_score: {
				type: Sequelize.DECIMAL,
			},
			release_date: {
				type: Sequelize.DATEONLY,
			},
			play_time: {
				type: Sequelize.INTEGER,
			},
			imdb_link: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable("contents");
	},
};
