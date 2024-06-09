const { get } = require("mongoose");
const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel"); // Import the Message model

module.exports.sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;
    
    // Find an existing conversation between the two participants
    let getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    // If no conversation exists, create a new one
    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: []  // Corrected key from `message` to `messages`
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });

    // If message creation is successful, add it to the conversation
    if (newMessage) {
      getConversation.messages.push(newMessage._id);  // Corrected key from `message` to `messages`
      await getConversation.save();  // Save the updated conversation
    }

    // Send a success response
    return res.status(201).json({
      message: "Message sent successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
module.exports.receiveMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;

    if (!senderId || !receiverId) {
      return res.status(400).send({ error: 'Sender ID and Receiver ID are required' });
    }

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    }).populate("messages");

    if (!conversation) {
      return res.status(404).send({ error: 'Conversation not found' });
    }

    console.log(conversation.messages);

    res.status(200).send(conversation.messages);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }}