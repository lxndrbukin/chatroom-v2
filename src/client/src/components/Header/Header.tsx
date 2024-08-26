import './assets/styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch, logout } from '../../store';
import HeaderSearch from './HeaderSearch';
import HeaderUserSection from './HeaderUserSection';
import { FaUserCircle } from 'react-icons/fa';
import { AiFillMessage } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';

export default function Header(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn, data } = useSelector((state: RootState) => state.session);

  const loginBtn = (
    <Link to="/login" className="header-user-auth-btn">
      <FiLogIn />
    </Link>
  );

  const handleLogout = (): void => {
    dispatch(logout());
  };

  const userSection = isLoggedIn ? (
    <HeaderUserSection icon={FaUserCircle}>
      <button onClick={handleLogout}>Logout</button>
    </HeaderUserSection>
  ) : (
    loginBtn
  );

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <AiFillMessage />
          ChatRoom
        </Link>
        <HeaderSearch />
        <div className="header-user">{userSection}</div>
      </div>
    </header>
  );
}
