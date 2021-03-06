const { Router } = require("express");
const {
	list,
	get,
	create,
	update,
	remove,
} = require("../controllers/actors.controller");
const route = Router();

//Endpoints
route.get("/actors", list);
route.get("/actors/:id", get);
route.post("/actors", create);
route.put("/actors/:id", update);
route.delete("/actors/:id", remove);

module.exports = route;
