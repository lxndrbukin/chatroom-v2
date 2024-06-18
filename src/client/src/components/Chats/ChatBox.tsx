import './assets/styles.scss';
import ChatForm from './ChatForm';

export default function ChatBox(): JSX.Element {
  return (
    <div className="chat-box">
      <div className="chat-messages"></div>
      <ChatForm />
    </div>
  );
}
