const router = require("express").Router();
const { ticketService } = require("../service/ticketService");

// Get Ticket
router.post("/valid", async (req, res) => {
  try {
    console.log(req.body)
    if (!req.body.uuid) {
      throw new Error(`No ticketId was provided`);
    }
    const getTicket = await ticketService.getTicket(req.body.uuid);
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
  if (process.env.ENVIRONMENT === "production") {
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

// Get all Ticket
router.get("/lastid", async (req, res) => {
  if (process.env.ENVIRONMENT === "production") {
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
    const getLastTicketId = await ticketService.getLastTicketId();
    res.status(200).json({
      getLastTicketId,
    });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// POST new Ticket
router.post("/", async (req, res) => {
  if (process.env.ENVIRONMENT === "production") {
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
    if (!req.body.uuid) {
      throw new Error(`No ticketId was provided`);
    }
    await ticketService.addTicket(req.body.uuid);
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
    if (!req.body.uuid) {
      throw new Error(`No ticketId was provided`);
    }
    await ticketService.updateTicket(req.body.uuid);
    res.status(201).json({ message: "Success! The ticket validity has been updated" });
  } catch (err) {
    res.status(400).json({
      error: `${err}`,
    });
  }
});

// DELETE Ticket
router.delete("/", async (req, res) => {
  if (process.env.ENVIRONMENT === "production") {
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
