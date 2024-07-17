import { Socket } from 'socket.io';
import { MessageType, Rooms, MessageProps } from './types';

export const io = (socketIO: Socket) => {
  const rooms: Rooms = {};
  socketIO.on(MessageType.Connection, (socket) => {
    console.log(socket.id, 'just connected');

    socket.on(MessageType.RoomConnection, ({ roomId }: MessageProps) => {
      if (roomId && !rooms[roomId]) rooms[roomId] = [];
      if (roomId && !rooms[roomId].includes(socket)) {
        rooms[roomId].push(socket);
      }
      rooms[roomId].forEach((client: Socket) => {
        client.emit(MessageType.TotalOnline, {
          totalOnline: rooms[roomId].length,
        });
      });
    });
    socket.on(MessageType.RoomDisconnection, ({ roomId }: MessageProps) => {
      if (rooms[roomId]) {
        rooms[roomId] = rooms[roomId].filter((user: Socket): boolean => {
          return user.id !== socket.id;
        });
        rooms[roomId].forEach((client: Socket) => {
          client.emit(MessageType.TotalOnline, {
            totalOnline: rooms[roomId].length,
          });
        });
      }
    });
    socket.on(
      MessageType.ChatMessage || MessageType.ChatAnnouncement,
      ({ roomId, msg }: MessageProps) => {
        if (rooms[roomId]) {
          rooms[roomId].forEach((client: Socket) => {
            client.emit(MessageType.ChatMessage, { msg });
          });
        }
      }
    );
    socket.on(MessageType.TotalOnline, ({ roomId }: MessageProps) => {
      if (rooms[roomId]) {
        rooms[roomId].forEach((client: Socket) => {
          client.emit(MessageType.TotalOnline, {
            totalOnline: rooms[roomId].length,
          });
        });
      }
    });
  });
};
