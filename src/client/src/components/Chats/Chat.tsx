import ChatBox from './ChatBox';
import ChatMembers from './ChatMembers';

export default function Chat(): JSX.Element {
  return (
    <div className="chat">
      <ChatBox />
      <ChatMembers />
    </div>
  );
}
