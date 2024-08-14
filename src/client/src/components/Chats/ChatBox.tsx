import { useEffect, useState } from 'react';
import { socket } from '../../socket';
import { MessageType, MessageProps } from '../../socket/types';
import { ChatMessageProps } from './types';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';

export default function ChatBox(): JSX.Element {
  const [messages, setMessages] = useState<Array<ChatMessageProps>>([]);

  useEffect(() => {
    socket.on(MessageType.ChatMessage, ({ msg }: MessageProps) => {
      if (msg) setMessages((prevState) => [...prevState, { msg }]);
    });
  }, []);

  const renderedMessages = messages.map((message) => {
    return <ChatMessage {...message} />;
  });

  return (
    <div className="chat-box">
      <div className="chat-messages">{renderedMessages}</div>
      <ChatForm />
    </div>
  );
}
