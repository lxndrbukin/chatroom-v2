import './assets/styles.scss';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import HeaderUserSection from './HeaderUserSection';
import { FaUserCircle } from 'react-icons/fa';
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
          <HeaderUserSection icon={FaUserCircle} />
        </div>
      </div>
    </header>
  );
}
