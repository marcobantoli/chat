const express = require("express");
const router = express.Router();
const {
  getMessages,
  setMessage,
  updateMessage,
  deleteMessage,
} = require("../controllers/messageController.js");
const { protect } = require("../middleware/authMiddleware.js");

// GET (all messages)
router.get("/", getMessages);

// GET (all messages in a room)
// router.get("/", getMessagesInRoom);

// POST (create a message)
router.post("/", protect, setMessage);

// PUT (edit a message)
router.put("/:id", protect, updateMessage);

// DELETE (delete a message)
router.delete("/:id", protect, deleteMessage);

module.exports = router;
