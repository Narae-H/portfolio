import './../styles/Dropdown.css';

import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import { VscChevronRight } from 'react-icons/vsc';

export function Dropdown ({ children, className = '', title='', ...props }) {
  // 
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

  // 2. Open Children => 여기서 부터 해야함. 자식 열리는 부분 구현 제대로 안됨. 선택된 자식만 열자.
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const handleMenuItemClick = (eventKey) => {
    setActiveMenuItem(eventKey);
  };

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
        <div className='na-dropdown-sub-menu-container'>
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

function Item ({ children, className = '', title='', link = '/', eventKey, ...props }) {
  // 1. Item children
  let hasChildren = React.Children.toArray(children).some( (child) => {
    return child.type === Item;
  });

  // 2. Open sub menu
  const [isActive, setIsActive] = useState(false);
  const actvieMenu = (activeKey) => (e) => {
    console.log(activeKey);
    console.log(eventKey);

    e.preventDefault();
    const isActive = eventKey === activeKey;
    setIsActive(isActive);
    console.log(`Event Key: ${eventKey}, Active Key: ${activeKey}, Is Active: ${isActive}`);
  };
  
  return (
    <div 
      onClick={actvieMenu(title)} 
      className={`na-dropdown-sub-menu ${className} ${isActive? 'active' : ''}`.trim()} 
      {...props}
    >
      {hasChildren?(
        <>
          <span className='na-dropdown-sub-menu-plain'>{title}</span>
          <span className='na-dropdown-sub-menu-icon'>
            <VscChevronRight />
          </span>
          
          <div className="na-dropdown-sub-menu-container">
            {React.Children.map(children, child => React.cloneElement(child) )}
          </div>
        </>
      ):
      ( <a href={link}>{title}</a> )
    }
    </div>
  )
}
Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  eventKey: PropTypes.string
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