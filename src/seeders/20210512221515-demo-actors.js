"use strict";

module.exports = {
	up: (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 * await queryInterface.bulkInsert('People', [{
		 *   name: 'John Doe',
		 *   isBetaMember: false
		 * }], {});
		 */
		return queryInterface.bulkInsert("actors", [
			{
				first_name: "Vanessa",
				last_name: "Kirby",
				dob: "1988-04-18",
				biography:
					"Vanessa Kirby (born 18 April 1988) is an English actress. For her role as Princess Margaret in the Netflix drama series The Crown (2016–2017), she won the British Academy Television Award for Best Supporting Actress and earned a nomination for the Primetime Emmy Award for Outstanding Supporting Actress in a Drama Series. She has also starred in several stage productions, earning three nominations for the Ian Charleson Awards, with Matt Trueman of Variety describing her as 'the outstanding stage actress of her generation, capable of the most unexpected choices.'",
				profile_photo:
					"https://resizer.glanacion.com/resizer/AfKDJz4uzxYGJdn0hYW512R6hAI=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/V7UF6JAERZGANEGHDZ4ULGUM6M.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Dominique",
				last_name: "Provost-Chalkley",
				dob: "1990-03-24",
				biography:
					"Dominique Provost-Chalkley (born 24 March 1990) is a British-Canadian philanthropist, musician, and an actress, best known for her role as Waverly Earp on the critically acclaimed television series Wynonna Earp. She is also the founder of “Start the Wave”, a non-profit organization that funds, empowers and connects positive changemakers worldwide.",
				profile_photo: "https://www.advocate.com/sites/default/files/dompc.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Gal",
				last_name: "Gadot",
				dob: "1985-04-30",
				biography:
					"Gal Gadot-Varsano (Hebrew: גל גדות‎ [ˈɡal ɡaˈdot];born 30 April 1985)is an Israeli actress, producer, and model. Gadot's first international film role came as Gisele Yashar in Fast & Furious (2009), a role she reprised in subsequent installments of the film franchise. She went on to gain worldwide recognition for portraying Diana Prince / Wonder Woman in the DC Extended Universe, beginning with Batman v Superman: Dawn of Justice (2016), followed by the solo film Wonder Woman, the ensemble Justice League (both 2017), the sequel Wonder Woman 1984 (2020), and the alternate cut Zack Snyder's Justice League (2021).",
				profile_photo:
					"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Gal_Gadot_cropped_lighting_corrected.jpg/1200px-Gal_Gadot_cropped_lighting_corrected.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Tim",
				last_name: "Rozon",
				dob: "1976-06-04",
				biography:
					"Timothy James Rozon (born June 4, 1976) is a Canadian actor. Rozon is known for portraying the characters of Tommy Quincy on the CTV teen drama Instant Star, Mutt Schitt in the CBC comedy Schitt's Creek, and Doc Holliday on the supernatural/western drama series Wynonna Earp.",
				profile_photo:
					"https://i.pinimg.com/736x/09/dd/1e/09dd1efa590291a040628518d4e26256.jpg",
				active: true,
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				first_name: "Dani",
				last_name: "Kind",
				dob: "1980-01-10",
				biography:
					"Dani Kind is a Canadian actress. She is most noted for her role as Anne Carlson in the television series Workin' Moms, for which she received a Canadian Screen Award nomination for Best Actress in a Comedy Series at the 7th Canadian Screen Awards in 2019",
				profile_photo:
					"http://static1.squarespace.com/static/58bf568d8419c2fec8f7fd66/5b86cbaa8a922deb24730b05/5b8d4009575d1f6f1e526571/1548033268088/IMG_4019.jpg?format=1500w",
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
		return queryInterface.bulkDelete("actors", null, {});
	},
};
