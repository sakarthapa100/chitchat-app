const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
    },
});
module.exports.getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {}; // {userId -> socketId}

io.on('connection', (socket) => {
    console.log("User connected ", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId !== undefined) {
        userSocketMap[userId] = socket.id;
    } 

    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    socket.on('disconnect', () => {
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    });
});

// server.listen(8000, () => {
//     console.log('Server is running on port 8000');
// });

module.exports = { app, io, server, getReceiverSocketId: (receiverId) => userSocketMap[receiverId] };
