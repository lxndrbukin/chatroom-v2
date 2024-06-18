import { FormEvent } from 'react';
import { socket } from '../../socket';

export default function ChatForm(): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.message.value;
    socket.emit('message', JSON.stringify({ message }));
  };
  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea name="message" className="chat-form-input" />
      <button>SEND</button>
    </form>
  );
}
