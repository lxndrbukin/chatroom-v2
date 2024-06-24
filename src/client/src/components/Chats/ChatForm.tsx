import { FormEvent, useState, ChangeEvent } from 'react';
import { socket } from '../../socket';

export default function ChatForm(): JSX.Element {
  const [text, setText] = useState('');

  const handleEnterPress = (e: KeyboardEvent | FormEvent): void => {
    if ((e as KeyboardEvent).key === 'Enter') {
      e.preventDefault();
      handleSubmit(e as FormEvent<HTMLFormElement>);
      setText('');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    socket.emit('message', JSON.stringify({ text }));
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form">
      <textarea
        onChange={handleChange}
        name="message"
        className="chat-form-input"
        onKeyDown={handleEnterPress}
        value={text}
      />
      <button>SEND</button>
    </form>
  );
}
