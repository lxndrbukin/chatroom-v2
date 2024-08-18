import './assets/styles.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType, MessageProps } from '../../socket/types';
import ChatBox from './ChatBox';
import ChatMembers from './ChatMembers';

export default function Chat(): JSX.Element {
  const { roomId } = useParams();

  useEffect(() => {
    socket.emit(MessageType.RoomConnection, { roomId, msg: 'user connected' });
    window.addEventListener('beforeunload', () => {
      socket.emit(MessageType.RoomDisconnection, { roomId });
    });
    return () =>
      window.removeEventListener('beforeunload', () => {
        socket.emit(MessageType.RoomDisconnection, { roomId });
      });
  }, []);

  return (
    <div className="chat">
      <ChatBox />
      <ChatMembers />
    </div>
  );
}
