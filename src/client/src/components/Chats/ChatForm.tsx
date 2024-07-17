import { FormEvent, useState, ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { socket } from '../../socket';
import { MessageType } from '../../socket/types';
import { BsSend } from 'react-icons/bs';

export default function ChatForm(): JSX.Element {
  const [msg, setMsg] = useState('');
  const { roomId } = useParams();

  const handleEnterPress = (e: KeyboardEvent | FormEvent): void => {
    if ((e as KeyboardEvent).key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as FormEvent<HTMLFormElement>);
      setMsg('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMsg(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    socket.emit(MessageType.ChatMessage, { roomId, msg });
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea
        onChange={handleChange}
        name="message"
        className="chat-form-input"
        onKeyDown={handleEnterPress}
        value={msg}
        placeholder="Your message"
      />
      <button>
        <BsSend />
      </button>
    </form>
  );
}
