import { IoSearchOutline } from 'react-icons/io5';

export default function HeaderSearch(): JSX.Element {
  return (
    <form className="header-search">
      <input name="search" placeholder="Search..." />
      <button>
        <IoSearchOutline />
      </button>
    </form>
  );
}
