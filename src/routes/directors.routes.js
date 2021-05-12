const { Router } = require("express");
const {
	list,
	get,
	create,
	update,
	remove,
} = require("../controllers/directors.controller");
const route = Router();

//Endpoints
route.get("/directors", list);
route.get("/directors/:id", get);
route.post("/directors", create);
route.put("/directors/:id", update);
route.delete("/directors/:id", remove);

module.exports = route;
