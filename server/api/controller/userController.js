const router = require("express").Router();
const { userService } = require("../service/userService");

// Get user
router.get("/", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    const getUser = await userService.getUser(req.userId);
    res.status(200).json({
      getUser,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Get all user
router.get("/all", async (req, res) => {
  if (process.env.ENVIRONMENT === "production" ) {
    res.status(401).json({
      error: "You should not be calling this endpoint on production!",
    });
    return;
  }
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    const getAllUser = await userService.getUsers();
    res.status(200).json({
      getAllUser,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// POST new user
router.post("/", async (req, res) => {
  try {
    if (!req.body.userInput.username) {
      throw new Error(`No username was provided`);
    }
    if (!req.body.userInput.pwd) {
      throw new Error(
        `Password missing!`
      );
    }
    const newUser = await userService.addUser(req.body.userInput);
    if (newUser) {
      res.status(201).json({ message: `Success! User ${newUser.username} has been created.` });
    } else { 
      res.status(400).json({
        error: `Something happened! User was not created`,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// token is valid?
router.post("/validtoken", async (req, res) => {
  try {
    if (!req.body.token) {
      throw new Error("Please provide a token");
    }
    const token = req.body.token;
    const tokenValid = await userService.validtoken(token);
    res.status(200).json({
      valid: tokenValid,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Username Taken?
router.post("/taken", async (req, res) => {
  try {
    if (!req.body.username) {
      throw new Error("Please provide a 'Username'");
    }
    const username = req.body.username.toLowerCase();
    const usernameTaken = await userService.taken(username);
    res.status(200).json({
      taken: usernameTaken,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Change password
router.post("/changepassword", async (req, res) => {
  try {
    if (!req.body.token) {
      throw new Error("Please provide a token");
    }
    if (!req.body.pwd) {
      throw new Error("Please provide a new password");
    }
    const token = req.body.token;
    const password = req.body.pwd;
    const passwordChanged = await userService.changepassword(token, password);
    res.status(200).json({
      changed: passwordChanged,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;
