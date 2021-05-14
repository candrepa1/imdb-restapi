"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Directors extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			this.belongsToMany(models.Contents, {
				through: models.ContentDirectors,
				foreignKey: "director_id",
			});
		}
	}
	Directors.init(
		{
			first_name: DataTypes.STRING,
			last_name: DataTypes.STRING,
			dob: DataTypes.DATEONLY,
			biography: DataTypes.TEXT,
			profile_photo: DataTypes.STRING,
			active: DataTypes.BOOLEAN,
		},
		{
			sequelize,
			modelName: "Directors",
			underscored: true,
			tableName: "directors",
		}
	);
	return Directors;
};
