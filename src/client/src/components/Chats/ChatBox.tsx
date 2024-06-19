import './assets/styles.scss';
import { useEffect, useState } from 'react';
import { socket } from '../../socket';
import ChatForm from './ChatForm';

export default function ChatBox(): JSX.Element {
  const [messages, setMessages] = useState<Array<{ message: string }>>([]);

  useEffect(() => {
    socket.on('message-client', (data: any) => {
      setMessages((prevState) => [...prevState, JSON.parse(data)]);
    });
  }, []);

  const renderedMessages = messages.map((message) => {
    return <div className="chat-message">{message.message}</div>;
  });

  return (
    <div className="chat-box">
      <div className="chat-messages">{renderedMessages}</div>
      <ChatForm />
    </div>
  );
}
