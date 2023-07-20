const express = require("express");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 5009;
require("dotenv/config");

// Init Express
const app = express();

// Redirect www trafic to root
app.set("trust proxy", true);

// Allow cross origin request
app.use(function (req, res, next) {
  let corsOptions = {};
  if (req.get("host") === "localhost:5009") {
    corsOptions = {
      origin: "http://localhost:5000",
      optionsSuccessStatus: 200,
    };
  } else {
    corsOptions = {
      origin: [
        "https://www.schwerelos-berlin.com",
        "https://schwerelos-berlin.com",
      ],
      credentials: true,
      optionsSuccessStatus: 200,
    };
  }
  cors(corsOptions)(req, res, next);
});

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sync sequelize
db.sequelize.sync();

// Router to API endpoints
app.use("/ticket", require("./api/controller/ticketController"));

// Set up for React
app.use(express.static(path.join(__dirname, "../build")));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Listen on a port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
