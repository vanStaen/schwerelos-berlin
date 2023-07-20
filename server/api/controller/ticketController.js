const router = require("express").Router();
const { ticketService } = require("../service/ticketService");

// Get Ticket
router.get("/", async (req, res) => {
  try {
    const getTicket = await ticketService.getTicket(req.ticketId);
    res.status(200).json({
      getTicket,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// POST new Ticket
router.post("/", async (req, res) => {
  try {
    if (!req.body.ticketId) {
      throw new Error(`No ticketId was provided`);
    }
    await ticketService.addTicket(req.body.ticketId);
    res.status(201).json({ message: "Success! Ticket has been added." });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// POST update Ticket validity
router.patch("/", async (req, res) => {
  if (!req.isAuth) {
    res.status(401).json({
      error: "Unauthorized",
    });
    return;
  }
  try {
    await ticketService.updateTicket(req.ticketId);
    res.status(201).json({ message: "Success! The ticket validity has been updated" });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

module.exports = router;
