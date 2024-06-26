import express from 'express';
import cors from 'cors';
import http from 'http';
import { io } from './socket';

const app = express();
app.use(cors());

const server = http.createServer(app);

const socketIO = require('socket.io')(server, {
  cors: 'http://localhost:3000',
});

io(socketIO);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('SERVER RUNNING ON PORT', PORT));
