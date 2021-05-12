const express = require("express");
const app = express();

// Routes
const actorsRoutes = require("./routes/actors.routes");
const directorsRoutes = require("./routes/directors.routes");

// Logging errors
const logger = require("morgan");
const fs = require("fs");

// Middleware
app.use(express.json());

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

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send("Something broke! please try again later.");
});

module.exports = app;
