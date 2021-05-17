const { Actors } = require("../models");

const list = async (req, res, next) => {
	try {
		const result = await Actors.findAll({ raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const get = async (req, res, next) => {
	try {
		const result = await Actors.findByPk(req.params.id, { raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const result = await Actors.create(req.body);
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Actors.update(req.body, { where: { id } });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Actors.destroy({ where: { id } });
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
