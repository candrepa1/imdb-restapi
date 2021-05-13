const { Directors } = require("../models");

const list = async (req, res, next) => {
	try {
		const result = await Directors.findAll({ raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const get = async (req, res, next) => {
	try {
		const result = await Directors.findByPk(req.params.id, { raw: true });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const create = async (req, res, next) => {
	try {
		const result = await Directors.create(req.body);
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const update = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Directors.update(req.body, { where: { id } });
		res.json(result);
	} catch (error) {
		next(error);
	}
};

const remove = async (req, res, next) => {
	try {
		const id = req.params.id;
		const result = await Directors.destroy({ where: { id } });
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
