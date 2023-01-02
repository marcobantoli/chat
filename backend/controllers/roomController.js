const Room = require("../models/roomModel.js");

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.get();
    res.status(200).json(rooms.rows);
  } catch {
    console.log("Error");
  }
};

const getRoom = async (req, res) => {
  try {
    const getRoom = await Room.getById(req.params.id);
    res.status(200).json(getRoom.rows[0]);
  } catch {
    res.sendStatus(500);
  }
};

const setRoom = async (req, res) => {
  try {
    const roomName = req.body.name;

    await Room.create(roomName);
    res.sendStatus(201);
  } catch {
    res.sendStatus(500);
  }
};

module.exports = {
  getRooms,
  getRoom,
  setRoom,
};
