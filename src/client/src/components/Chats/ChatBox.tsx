import './assets/styles.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType } from '../../socket/types';
import ChatForm from './ChatForm';

export default function ChatBox(): JSX.Element {
  const [messages, setMessages] = useState<Array<{ text: string }>>([]);

  const { roomId } = useParams();

  useEffect(() => {
    socket.emit(
      MessageType.RoomConnection,
      JSON.stringify({ roomId, message: 'user connected' })
    );

    socket.on(MessageType.ChatMessage, (data: any) => {
      setMessages((prevState) => [...prevState, JSON.parse(data)]);
    });
  }, []);

  const renderedMessages = messages.map((message) => {
    return <div className="chat-message">{message.text}</div>;
  });

  return (
    <div className="chat-box">
      <div className="chat-messages">{renderedMessages}</div>
      <ChatForm />
    </div>
  );
}
