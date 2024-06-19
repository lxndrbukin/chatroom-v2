import { Socket } from 'socket.io';

export const io = (socketIO: Socket) => {
  socketIO.on('connection', (socket) => {
    console.log(socket.id, 'just connected');
    socket.on('message', (data: any) => {
      socketIO.emit('message-client', data);
    });
  });
};
