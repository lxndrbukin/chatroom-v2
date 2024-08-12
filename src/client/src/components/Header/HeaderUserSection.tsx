import { ReactNode, useRef, useEffect, useState } from 'react';
import { IconType } from 'react-icons';

type HeaderUserSectionProps = {
  icon: IconType;
  children?: ReactNode;
};

export default function HeaderUserSection({
  icon,
  children,
}: HeaderUserSectionProps): JSX.Element {
  const iconRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return (): void =>
      document.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleOutsideClick = (e: MouseEvent): void => {
    if (
      iconRef &&
      !iconRef.current?.contains(e.target as Element) &&
      !dropdownRef.current?.contains(e.target as Element)
    ) {
      setIsVisible(false);
    }
  };

  const dropdown = (
    <div ref={dropdownRef} className="header-user-section-dropdown">
      {children}
    </div>
  );

  return (
    <div className="header-user-section">
      <div
        ref={iconRef}
        onClick={() => setIsVisible(!isVisible)}
        className="header-user-section-icon"
      >
        {icon({ size: 30 })}
      </div>
      {isVisible && dropdown}
    </div>
  );
}
