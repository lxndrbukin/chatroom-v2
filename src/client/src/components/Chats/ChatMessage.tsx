type ChatMessageProps = {
  msg: string;
};

export default function ChatMessage({ msg }: ChatMessageProps): JSX.Element {
  const avatarPlaceholder =
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541';

  return (
    <div className="chat-message">
      <img className="chat-message-avatar" src={avatarPlaceholder} alt="" />
      <div className="chat-message-text">{msg}</div>
    </div>
  );
}
