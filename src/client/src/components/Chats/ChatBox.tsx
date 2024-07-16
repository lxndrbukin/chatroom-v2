import './assets/styles.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType } from '../../socket/types';
import ChatForm from './ChatForm';

export default function ChatBox(): JSX.Element {
  const [messages, setMessages] = useState<Array<{ chatMsg: string }>>([]);
  const [totalOnline, setTotalOnline] = useState(0);
  const { roomId } = useParams();

  useEffect(() => {
    socket.on(MessageType.TotalOnline, (data: any) => {
      setTotalOnline(data.totalOnline);
    });

    socket.emit(
      MessageType.RoomConnection,
      JSON.stringify({ roomId, message: 'user connected' })
    );

    socket.on(MessageType.ChatMessage, (data: any) => {
      console.log(data);
      setMessages((prevState) => [...prevState, JSON.parse(data)]);
    });
  }, []);

  const renderedMessages = messages.map((message) => {
    return <div className="chat-message">{message.chatMsg}</div>;
  });

  return (
    <div className="chat-box">
      <div>Total Online: {totalOnline}</div>
      <div className="chat-messages">{renderedMessages}</div>
      <ChatForm />
    </div>
  );
}
