const router = require("express").Router();
const { ticketService } = require("../service/ticketService");

// Get Ticket
router.get("/", async (req, res) => {
  try {
    if (!req.body.ticketId) {
      throw new Error(`No ticketId was provided`);
    }
    const getTicket = await ticketService.getTicket(req.body.ticketId);
    res.status(200).json({
      getTicket,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});


// Get all Ticket
router.get("/all", async (req, res) => {
  try {
    const getAllTicket = await ticketService.getTickets();
    res.status(200).json({
      getAllTicket,
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
  try {
    if (!req.body.ticketId) {
      throw new Error(`No ticketId was provided`);
    }
    await ticketService.updateTicket(req.body.ticketId);
    res.status(201).json({ message: "Success! The ticket validity has been updated" });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// DELETE Ticket
router.delete("/", async (req, res) => {
  try {
    if (!req.body.id) {
      throw new Error(`No id was provided`);
    }
    await ticketService.deleteTicket(req.body.id);
    res.status(201).json({ message: "Success! The ticket has been deleted" });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});


module.exports = router;
