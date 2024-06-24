import { Socket } from 'socket.io';
import { MessageType, Rooms } from './types';

export const io = (socketIO: Socket) => {
  const rooms: Rooms = {};
  socketIO.on(MessageType.Connection, (socket) => {
    console.log(socket.id, 'just connected');

    socket.on(MessageType.RoomConnection, (data: any) => {
      const { roomId } = JSON.parse(data);
      if (roomId && !rooms[data.roomId]) rooms[roomId] = [];
      if (roomId && !rooms[roomId].includes(socket)) {
        rooms[data.roomId].push(socket);
      }
    });
    socket.on(MessageType.RoomDisconnection, (data: any) => {
      if (rooms[data.roomId]) {
        rooms[data.roomId] = rooms[data.roomId].filter(
          (user: Socket): boolean => {
            return user !== socket;
          }
        );
      }
    });
    socket.on(
      MessageType.ChatMessage || MessageType.ChatAnnouncement,
      (data: any) => {
        if (rooms[data.roomId]) {
          rooms[data.roomId].forEach((client: Socket) => {
            client.emit(MessageType.ChatMessage, data);
          });
        }
      }
    );
  });
};
