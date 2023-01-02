const express = require("express");
const router = express.Router();
const {
  getRooms,
  getRoom,
  setRoom,
} = require("../controllers/roomController.js");
// const { protect } = require('../middleware/authMiddleware.js');

// GET (all rooms)
router.get("/", getRooms);

// Get (one room)
router.get("/:id", getRoom);

// Post (create a room)
router.post("/", setRoom);

module.exports = router;
