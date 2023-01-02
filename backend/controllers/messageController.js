const Message = require("../models/messageModel.js");

const getMessages = async (req, res) => {
  try {
    const messages = await Message.get();
    res.status(200).json(messages.rows);
  } catch {
    console.log("Error");
  }
};

const setMessage = async (req, res) => {
  try {
    const roomId = req.body.roomId;
    const userId = req.userId;
    const message = req.body.message;

    await Message.create(roomId, userId, message);
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
};

const updateMessage = async (req, res) => {
  try {
    const messageId = req.params.id;
    const newMessage = req.body.newMessage;

    await Message.update(messageId, newMessage);
    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
};

const deleteMessage = async (req, res) => {
  try {
    const messageId = req.params.id;

    await Message.delete(messageId);
    res.sendStatus(204);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  getMessages,
  setMessage,
  updateMessage,
  deleteMessage,
};
