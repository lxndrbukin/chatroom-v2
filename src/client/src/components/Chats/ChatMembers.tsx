import { useState, useEffect } from 'react';
import { socket } from '../../socket';
import { MessageType, MessageProps } from '../../socket/types';

export default function ChatMembers(): JSX.Element {
  const [totalOnline, setTotalOnline] = useState(0);

  useEffect(() => {
    socket.on(MessageType.TotalOnline, ({ totalOnline }: MessageProps) => {
      if (totalOnline) setTotalOnline(totalOnline);
    });
  }, []);

  return (
    <div className="chat-members">
      <div className="chat-members-status">
        <div className="chat-members-status-indicator">
          <span className="online"></span> Online: {totalOnline}
        </div>
      </div>
      <div className="chat-members-list"></div>
    </div>
  );
}
