import { FormEvent, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType } from '../../socket/types';

export default function ChatForm(): JSX.Element {
  const [chatMsg, setChatMsg] = useState('');
  const { roomId } = useParams();

  const handleEnterPress = (e: KeyboardEvent | FormEvent): void => {
    if ((e as KeyboardEvent).key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as FormEvent<HTMLFormElement>);
      setChatMsg('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setChatMsg(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    socket.emit(MessageType.ChatMessage, JSON.stringify({ roomId, chatMsg }));
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea
        onChange={handleChange}
        name="message"
        className="chat-form-input"
        onKeyDown={handleEnterPress}
        value={chatMsg}
      />
      <button>SEND</button>
    </form>
  );
}
