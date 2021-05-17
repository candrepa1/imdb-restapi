const { Router } = require("express");
const {
	list,
	get,
	create,
	update,
	remove,
	picture,
} = require("../controllers/actors.controller");
const route = Router();
const multer = require("multer");
const mimetype = require("mime-types");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads/actors");
	},
	filename: (req, file, cb) => {
		const ext = mimetype.extension(file.mimetype);
		if (ext === "jpg" || ext === "jpeg" || ext === "png") {
			cb(null, `${file.fieldname}${Date.now()}-actor${req.params.id}.${ext}`);
		} else {
			const fileError = new Error("The file format is not accepted");
			cb(fileError, null);
		}
	},
});

const upload = multer({ storage: storage, limits: { fileSize: 1000000 } });

//Endpoints
route.get("/actors", list);
route.get("/actors/:id", get);
route.post("/actors", create);
route.put("/actors/:id", update);
route.delete("/actors/:id", remove);
route.post("/actors/profile", upload.single("image"), picture);

module.exports = route;
