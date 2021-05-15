const { Users } = require("../models");
const bcrypt = require("bcryptjs");

const list = async (req, res, next) => {
	try {
		const result = await Users.findAll({ raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const get = async (req, res, next) => {
	try {
		const result = await Users.findByPk(req.params.id, { raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const { password, firstName, lastName, email } = req.body;
		const hash = await bcrypt.hash(password, 10);
		const result = await Users.create({
			firstName,
			lastName,
			email,
			password: hash,
		});
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Users.update(req.body, { where: { id } });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Users.destroy({ where: { id } });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

module.exports = {
	list,
	get,
	create,
	update,
	remove,
};