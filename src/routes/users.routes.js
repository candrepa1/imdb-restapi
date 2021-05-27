const { Router } = require("express");
const {
	list,
	get,
	create,
	update,
	remove,
} = require("../controllers/users.controller");
const route = Router();

// Endpoints
route.get("/users", list);
route.get("/users/:id", get);
route.post("/users", create);
route.put("/users/:id", update);
route.delete("/users/:id", remove);

module.exports = route;
