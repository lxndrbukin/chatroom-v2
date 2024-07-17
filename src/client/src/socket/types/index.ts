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
  totalOnline?: number;
};
