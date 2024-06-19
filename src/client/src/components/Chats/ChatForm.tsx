import { FormEvent, useRef, useEffect } from 'react';
import { socket } from '../../socket';

export default function ChatForm(): JSX.Element {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          socket.emit('message', JSON.stringify({}));
        }
      });
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = e.currentTarget.message.value;
    socket.emit('message', JSON.stringify({ message }));
  };
  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea ref={inputRef} name="message" className="chat-form-input" />
      <button>SEND</button>
    </form>
  );
}
