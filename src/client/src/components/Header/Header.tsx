import './assets/styles.scss';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import HeaderUserSection from './HeaderUserSection';
import { PiUserCircle } from 'react-icons/pi';
import { BsChatRightFill } from 'react-icons/bs';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <BsChatRightFill />
          ChatRoom
        </Link>
        <HeaderSearch />
        <div className="header-user">
          <HeaderUserSection icon={PiUserCircle} />
        </div>
      </div>
    </header>
  );
}
