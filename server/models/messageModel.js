const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // fixed typo: require -> required
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true // fixed typo: require -> required
  },
  message: {
    type: String,
    required: true // fixed typo: require -> required
  }
}, { timestamps: true });

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
