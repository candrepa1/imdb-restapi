"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Contents extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.Actors, {
				through: models.ContentActors,
				foreignKey: "content_id",
			});
			this.belongsToMany(models.Directors, {
				through: models.ContentDirectors,
				foreignKey: "content_id",
			});
			this.belongsToMany(models.Genres, {
				through: models.ContentGenres,
				foreignKey: "content_id",
			});
		}
	}
	Contents.init(
		{
			title: DataTypes.STRING,
			description: DataTypes.TEXT,
			total_seasons: DataTypes.INTEGER,
			imdb_score: DataTypes.DECIMAL,
			release_date: DataTypes.DATEONLY,
			play_time: DataTypes.INTEGER,
			imdb_link: DataTypes.STRING,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Contents",
			underscored: true,
		}
	);
	return Contents;
};
