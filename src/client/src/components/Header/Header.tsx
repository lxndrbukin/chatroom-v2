import './assets/styles.scss';
import { Link } from 'react-router-dom';
import { PiUserCircle } from 'react-icons/pi';
import { IoSearchOutline } from 'react-icons/io5';

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
          ChatRoom
        </Link>
        <form className="header-search">
          <input name="search" placeholder="Search..." />
          <button>
            <IoSearchOutline />
          </button>
        </form>
        <div className="header-user">
          <div className="header-user-profile">
            <div className="header-user-icon">
              <PiUserCircle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
