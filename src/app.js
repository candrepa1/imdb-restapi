const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

// Swagger docs ui
const swaggerUi = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");

// Routes
const actorsRoutes = require("./routes/actors.routes");
const directorsRoutes = require("./routes/directors.routes");
const usersRoutes = require("./routes/users.routes");
const path = require("path");

// Logging errors
const logger = require("morgan");
const fs = require("fs");

// multer storage
const multer = require("multer");
const mimetype = require("mime-types");

const actorStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve("./src/uploads/actors"));
	},
	filename: (req, file, cb) => {
		const ext = mimetype.extension(file.mimetype);
		if (ext === "jpg" || ext === "jpeg" || ext === "png") {
			cb(null, `${file.fieldname}${Date.now()}-actor.${ext}`);
		} else {
			const fileError = new Error("The file format is not accepted");
			cb(fileError, null);
		}
	},
});

const directorStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.resolve("./src/uploads/directors"));
	},
	filename: (req, file, cb) => {
		const ext = mimetype.extension(file.mimetype);
		if (ext === "jpg" || ext === "jpeg" || ext === "png") {
			cb(null, `${file.fieldname}${Date.now()}-actor.${ext}`);
		} else {
			const fileError = new Error("The file format is not accepted");
			cb(fileError, null);
		}
	},
});

const uploadActors = multer({
	storage: actorStorage,
	limits: { fileSize: 1000000 },
});
const uploadDirectors = multer({
	storage: directorStorage,
	limits: { fileSize: 1000000 },
});

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.static(__dirname + "/uploads"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Morgan logger
app.use(
	logger("combined", {
		skip: (req, res) => res.statusCode < 500,
		stream: fs.createWriteStream("./logs/errors.log", { flags: "a" }),
	})
);
app.use(
	logger("combined", {
		stream: fs.createWriteStream("./logs/access.log", { flags: "a" }),
	})
);

app.get("/", (req, res) => res.json({ home: "working" }));

app.use("/api/v1/", actorsRoutes);
app.use("/api/v1/", directorsRoutes);
app.use("/api/v1/", usersRoutes);
app.put(
	"/api/v1/actors/:id/profile",
	uploadActors.single("image"),
	(req, res) => {
		const id = req.params.id;
		try {
			res.send(req.file);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	}
);
app.put(
	"/api/v1/directors/:id/profile",
	uploadDirectors.single("image"),
	(req, res) => {
		const id = req.params.id;
		try {
			res.send(req.file);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	}
);

app.post("/api/v1/login", (req, res) => {});

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke! please try again later.");
});

module.exports = app;
