const router = require("express").Router();
const { authService } = require("../service/authService");
const { userService } = require("../service/userService");

// Login
router.post("/login", async (req, res) => {
  try {
    if (!req.body.email && !req.body.username) {
      throw new Error("Please provide at least an 'Email' or a 'Username'");
    }
    const result = await authService.login(
      req,
      req.body.email,
      req.body.username,
      req.body.pwd
    );
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(403).json({
      result: {
        access: false,
        error: `${err}`,
      },
    });
  }
});

// Logout
router.delete("/logout", async (req, res) => {
  try {
    const logoutSuccess = await authService.logout(req);
    if (logoutSuccess) {
      res.status(200).json({
        success: logoutSuccess,
      });
    } else {
      throw new Error("Error during Logout!");
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
  4;
});

// Has access?
router.get("/access", async (req, res) => {
  try {
    const hasAccess = await authService.access(req);
    if (hasAccess) {
      res.status(200).json({
        access: hasAccess,
      });
    } else {
      res.status(200).json({
        access: false,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;
