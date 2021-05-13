"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert("directors", [
			{
				first_name: "Melanie",
				last_name: "Scrofano",
				dob: "1981-12-20",
				biography:
					"Melanie Neige Scrofano is a Canadian actress and director. She is known for playing Mrs. McMurray on the Crave comedy series Letterkenny, Rebecca on the CBC comedy-drama series Being Erica, October on the Showcase mockumentary series Pure Pwnage, Tia on the CTV fantasy-drama series The Listener, and the title character on the Syfy modern Western drama Wynonna Earp in which she made her directing debut.",
				profile_photo:
					"https://img.buzzfeed.com/buzzfeed-static/static/2021-03/28/19/asset/dcd9995afa7d/sub-buzz-2993-1616959050-1.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Giacomo",
				last_name: "Gianniotti",
				dob: "1989-06-19",
				biography:
					"Giacomo Keaton Gianniotti (born 19 June 1989) is an Italian-Canadian actor and director. He studied theatre at Humber College and made his acting debut in the Italian television series Medicina Generale in 2010. He went on to play recurring roles in the television series Reign (2013) and Murdoch Mysteries (2013–2014). From 2015 to 2021, Gianniotti played Dr. Andrew DeLuca in the medical drama series Grey's Anatomy in which he made his directing debut.",
				profile_photo:
					"https://img.buzzfeed.com/buzzfeed-static/static/2021-03/28/19/asset/dcd9995afa7d/sub-buzz-2993-1616959050-1.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Katherine",
				last_name: "Barrell",
				dob: "1990-02-12",
				biography:
					"Katherine Barrell is a Canadian actress, writer, producer, and director. She is best known for her role as Sheriff Nicole Haught in the Syfy supernatural weird West television series Wynonna Earp. In 2020, she joined the cast of the fantasy comedy-drama television series Good Witch as Joy Harper.",
				profile_photo:
					"https://www.celebheights.com/xr/k/katherine-barrell.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Mimi",
				last_name: "Leder",
				dob: "1952-01-26",
				biography:
					"Miriam Leder (/ˈliːdər/;[1][2] born January 26, 1952) is an American film and television director and producer noted for her action films and use of special effects. She was the first female graduate of the AFI Conservatory, in 1973. Her latest work is 'The Morning Show' starring Reese Witherspoon, Jennifer Aniston, and Steve Carrell.",
				profile_photo:
					"https://m.media-amazon.com/images/M/MV5BN2VmMDhkMTktYzQxMC00NTM2LWJmNjAtYjk1MTRmNzdhMDU1XkEyXkFqcGdeQXVyMjA0OTczMzk@._V1_UY317_CR20,0,214,317_AL_.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Silas",
				last_name: "Howard",
				dob: "1989-10-15",
				biography:
					"Silas Howard is an American director, scriptwriter and actor. His first feature film was By Hook or by Crook in 2001 with Harry Dodge, and he earned an MFA in directing at UCLA. He began directing episodes during the second season of Transparent, making him the show's first trans director.",
				profile_photo:
					"https://m.media-amazon.com/images/M/MV5BMTc5MTI0NjQwM15BMl5BanBnXkFtZTgwMDM1ODI2NDM@._V1_UY1200_CR585,0,630,1200_AL_.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
		]);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
		return queryInterface.bulkDelete("directors", null, {});
	},
};
