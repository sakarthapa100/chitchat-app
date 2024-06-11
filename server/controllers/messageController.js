const { get } = require("mongoose");
const Conversation = require("../models/conversationModel");
const Message = require("../models/messageModel"); 
const {app, io, server, getReceiverSocketId } = require("../socket/socket");

module.exports.sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;
    
    
    let getConversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

   
    if (!getConversation) {
      getConversation = await Conversation.create({
        participants: [senderId, receiverId],
        messages: []  
      });
    }

    // Create a new message
    const newMessage = await Message.create({
      senderId,
      receiverId,
      message
    });

   
    if (newMessage) {
      getConversation.messages.push(newMessage._id);  
      
    }

await Promise.all([getConversation.save(), newMessage.save()])
    //socket io part 

    const receiverSocketId = getReceiverSocketId(receiverId)
    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage", newMessage)
    }

    // Send a success response
    return res.status(201).json({
      newMessage
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