import { Socket } from 'socket.io';

export type Rooms = {
  [key: string]: Array<Socket>;
};

export enum MessageType {
  TotalOnline = 'totalOnline',
  ChatMessage = 'chatMessage',
  ChatAnnouncement = 'announcement',
  Status = 'status',
  Connected = 'connected',
  Disconnected = 'disconnected',
  UpdateSessionStatus = 'updateSessionStatus',
  RoomConnection = 'roomConnection',
  RoomDisconnection = 'roomDisconnection',
}
