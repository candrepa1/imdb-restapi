"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class ContentDirectors extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsTo(models.Directors, {
				foreignKey: "director_id",
			});
			this.belongsTo(models.Contents, {
				foreignKey: "content_id",
			});
		}
	}
	ContentDirectors.init(
		{
			director_id: DataTypes.INTEGER,
			content_id: DataTypes.INTEGER,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "ContentDirectors",
			underscored: true,
			tableName: "contentdirectors",
		}
	);
	return ContentDirectors;
};
