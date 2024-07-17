import { Socket } from 'socket.io';

export type Rooms = {
  [key: string]: Array<Socket>;
};

export enum MessageType {
  TotalOnline = 'totalOnline',
  ChatMessage = 'chatMessage',
  ChatAnnouncement = 'announcement',
  Status = 'status',
  Connection = 'connection',
  Disconnection = 'disconnection',
  UpdateSessionStatus = 'updateSessionStatus',
  RoomConnection = 'roomConnection',
  RoomDisconnection = 'roomDisconnection',
}

export type MessageProps = {
  roomId: number;
  msg?: string;
};
