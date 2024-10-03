import './../styles/Dropdown.css';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export function Dropdown ({ children, className = '', title='', ...props }) {
  const [ isOpen, setIsOpen ] = useState(false);
  const dropdownRef = useRef(null);

  const openMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [isOpen]);

  return (
    <div 
      ref={dropdownRef}
      className={`na-dropdown-wrapper ${className}`.trim()} 
      {...props}
    >
      { title && (
        <div 
          className={`na-dropdown-main-menu ${isOpen && `open`}`} 
          onClick={openMenu}
        >
          {title}
        </div>
      )}
      { children && (
        <div className='na-dropdown-sub-menu-wrapper'>
          { children }
        </div>
      )}
    </div>
  )
}
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

function Item ({ children, className = '', title='', link = '/', ...props }) {

  return (
    <div className={`na-dropdown-sub-menu ${className}`.trim()} {...props}>
      <a href={link}>{title}</a>
      { children }
    </div>
  )
}
Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
};

function Divider ({ className = '', ...props }) {
  return (
    <hr className={`na-dropdown-divider ${className}`.trim()} {...props} />
  )
}
Divider.propTypes = {
  className: PropTypes.string
};

Dropdown.Item = Item;
Dropdown.Divider = Divider;