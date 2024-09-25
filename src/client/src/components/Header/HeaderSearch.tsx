import { FocusEvent, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';

export default function HeaderSearch(): JSX.Element {
  const [select, setSelect] = useState<boolean>(false);

  const handleSelect = (e: FocusEvent<HTMLInputElement>) => {
    setSelect(!select);
  };

  return (
    <form className={`header-search ${select ? 'selected' : ''}`}>
      <input
        onSelect={handleSelect}
        onBlur={handleSelect}
        name="search"
        placeholder="Search..."
      />
      <button>
        <IoSearchOutline />
      </button>
    </form>
  );
}
