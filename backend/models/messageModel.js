const pool = require("../config/db.js");

const Message = {};

Message.get = () => {
  return pool.query("SELECT * FROM messages");
};

Message.create = (roomId, userId, message) => {
  return pool.query(
    "INSERT INTO messages(message_id, room_id, user_id, message) VALUES(DEFAULT, $1, $2, $3)",
    [roomId, userId, message]
  );
};

Message.update = (id, newMessage) => {
  return pool.query("UPDATE messages SET message = $1 WHERE message_id = $2", [
    newMessage,
    id,
  ]);
};

Message.delete = (id) => {
  return pool.query("DELETE FROM messages WHERE message_id = $1", [id]);
};

module.exports = Message;
