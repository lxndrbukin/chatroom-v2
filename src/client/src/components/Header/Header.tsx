import './assets/styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import HeaderSearch from './HeaderSearch';
import HeaderUserSection from './HeaderUserSection';
import { FaUserCircle } from 'react-icons/fa';
import { BsChatRightFill } from 'react-icons/bs';

export default function Header(): JSX.Element {
  const { isLoggedIn, data } = useSelector((state: RootState) => state.session);

  const loginBtn = <button className="header-auth-btn">Login</button>;

  const userSection = isLoggedIn ? (
    <HeaderUserSection icon={FaUserCircle} />
  ) : (
    loginBtn
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <BsChatRightFill />
          ChatRoom
        </Link>
        <HeaderSearch />
        <div className="header-user">{userSection}</div>
      </div>
    </header>
  );
}
