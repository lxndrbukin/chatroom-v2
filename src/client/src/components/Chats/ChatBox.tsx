import './assets/styles.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType, MessageProps } from '../../socket/types';
import { ChatMessageProps } from './types';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';

export default function ChatBox(): JSX.Element {
  const [messages, setMessages] = useState<Array<ChatMessageProps>>([]);
  const [totalOnline, setTotalOnline] = useState(0);
  const { roomId } = useParams();

  useEffect(() => {
    socket.on(MessageType.TotalOnline, ({ totalOnline }: MessageProps) => {
      if (totalOnline) setTotalOnline(totalOnline);
    });

    socket.emit(MessageType.RoomConnection, { roomId, msg: 'user connected' });

    socket.on(MessageType.ChatMessage, ({ msg }: MessageProps) => {
      if (msg) setMessages((prevState) => [...prevState, { msg }]);
    });

    window.addEventListener('beforeunload', () => {
      socket.emit(MessageType.RoomDisconnection, { roomId });
    });
  }, []);

  const renderedMessages = messages.map((message) => {
    return <ChatMessage {...message} />;
  });

  return (
    <div className="chat-box">
      <div>Total Online: {totalOnline}</div>
      <div className="chat-messages">{renderedMessages}</div>
      <ChatForm />
    </div>
  );
}
