const router = require("express").Router();
const { guestlistService } = require("../service/guestlistService");

// Get all guestlists
router.get("/all", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    const getGuestlists = await guestlistService.getGuestlists();
    res.status(200).json({
      getGuestlists,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Post all guestlists for one party
router.post("/all", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    const getGuestlistsForParty = await guestlistService.getGuestlistsForParty(req.body.partyId);
    res.status(200).json({
      getGuestlistsForParty,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// Post all guestlists count for one party
router.post("/count", async (req, res) => {
  try {
    const getGuestlistsForParty = await guestlistService.getGuestlistsCountForParty(req.body.partyId);
    res.status(200).json({
      getGuestlistsForParty,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// PATCH a guestlist
router.patch("/", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    const patchGuestlistsForParty = await guestlistService.updateGuestlist(req.body.guestlistId, req.body.guestlistInput);
    res.status(200).json({
      patchGuestlistsForParty,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// POST new guestlist
router.post("/add", async (req, res) => {
  try {
    if (!req.body.guestlistInput.email) {
      throw new Error(`No email was provided`);
    }
    if (!req.body.guestlistInput.name) {
      throw new Error(`No name was provided`);
    }
    if (!req.body.guestlistInput.partyId) {
      throw new Error(`No refering party was provided`);
    }
    if (!req.body.guestlistInput.listType) {
      throw new Error(`No guestlist type was provided`);
    }
    const newGuestlist = await guestlistService.addGuestlist(req.body.guestlistInput);
    if (newGuestlist) {
      res.status(201).json({ message: `Success! This guestlist spot has been added.`, result: true });
    } else {
      res.status(400).json({
        error: `Something happened! Guestlist was not created`,
      });
    }
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// DELETE guestlist
router.delete("/", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    if (!req.body.guestlistId) {
      throw new Error(`No guestlistId was provided`);
    }
    await guestlistService.deleteGuestlist(req.body.guestlistId);
    res.status(201).json({ message: "Success! The guestlist spot has been deleted" });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// email already in guestlist?
router.post("/already", async (req, res) => {
  try {
    if (!req.body.email) {
      throw new Error("Please provide an email");
    }
    if (!req.body.partyId) {
      throw new Error("Please provide an email");
    }
    const email = req.body.email.toLowerCase();
    const already = await guestlistService.isAreadyOnTheList(email, req.body.partyId);
    res.status(200).json({
      already: already,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;
