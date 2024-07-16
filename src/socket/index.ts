import { Socket } from 'socket.io';
import { MessageType, Rooms } from './types';

export const io = (socketIO: Socket) => {
  const rooms: Rooms = {};
  socketIO.on(MessageType.Connection, (socket) => {
    console.log(socket.id, 'just connected');

    socket.on(MessageType.RoomConnection, (data: any) => {
      const { roomId } = JSON.parse(data);
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
    socket.on(MessageType.RoomDisconnection, ({ roomId }: any) => {
      if (rooms[roomId]) {
        rooms[roomId] = rooms[roomId].filter((user: Socket): boolean => {
          return user !== socket;
        });
      }
    });
    socket.on(
      MessageType.ChatMessage || MessageType.ChatAnnouncement,
      (data: any) => {
        const { roomId, chatMsg } = JSON.parse(data);
        if (rooms[roomId]) {
          console.log(chatMsg);
          rooms[roomId].forEach((client: Socket) => {
            client.emit(MessageType.ChatMessage, JSON.stringify({ chatMsg }));
          });
        }
      }
    );
    socket.on(MessageType.TotalOnline, (data: any) => {
      const { roomId } = JSON.parse(data);
      if (rooms[roomId]) {
        rooms[roomId].forEach((client: Socket) => {
          client.emit(
            MessageType.TotalOnline,
            JSON.stringify({ totalOnline: rooms[roomId].length })
          );
        });
      }
    });
  });
};
