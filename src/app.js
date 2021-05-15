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

// Logging errors
const logger = require("morgan");
const fs = require("fs");

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
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

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke! please try again later.");
});

module.exports = app;
