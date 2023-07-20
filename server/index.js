const express = require("express");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 5009;

// Init Express
const app = express();

// Redirect www trafic to root
app.set("trust proxy", true);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sync sequelize
db.sequelize.sync();

// Router to API endpoints
app.use("/ticket", require("./api/controller/ticket"));


// Set up for React
app.use(express.static(path.join(__dirname, "../build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
