const pool = require("../config/db.js");

const Room = {};

Room.get = () => {
  return pool.query("SELECT * FROM rooms");
};

Room.getById = (id) => {
  return pool.query("SELECT * FROM rooms WHERE room_id=$1", [id]);
};

Room.create = (name) => {
  return pool.query(
    "INSERT INTO rooms(room_id, room_name) VALUES(DEFAULT, $1)",
    [name]
  );
};

module.exports = Room;
