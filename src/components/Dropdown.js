import './../styles/Dropdown.css';

import React from 'react';
import PropTypes from 'prop-types';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

// Create a context for the dropdown
const DropDownContext = createContext();

export function Dropdown ({ children, className = '', title='', ...props }) {
  // 1. Controlling dropdown open/close state
  // 1-1) Initialize variables
  const [ isDropdownOpen, setIsDropdownOpen ] = useState(false); // State for managing dropdown open/close 
  const dropdownRef                           = useRef(null);    // Ref for dropdown element (used for click outside detection)
  
  // 1-2) Toggle dropdown open/close
  const handleDropdownClick = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  // 1-3) Close dropdown when clicking outside
  const closeMenu = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
      setActiveKey(null);
    }
  };
  
  // 1-4) Add/remove event listener for click outside detection
  useEffect(() => {
    document.addEventListener('mousedown', closeMenu);
    return () => {
      document.removeEventListener('mousedown', closeMenu);
    };
  }, [isDropdownOpen]);
  

  // 2. Controlling an active state of children
  // 2-1) Initialize variables
  const [ activeKey, setActiveKey ] = useState(null); // State for managing active item
  
  // 2-2) Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    activeKey,
    setActiveKey
  }), [activeKey]);
  
  return (
    <div 
      ref={dropdownRef}
      className={`na-dropdown-wrapper ${className}`.trim()} 
      {...props}
    >
      { title && (
        <div 
          className={`na-dropdown-main-menu ${isDropdownOpen && `open`}`} 
          onClick={handleDropdownClick}
        >
          {title}
        </div>
      )}
      { children && (
        <DropDownContext.Provider value= {contextValue}>
          <div className='na-dropdown-sub-menu-container'>
            {children}
          </div>
        </DropDownContext.Provider> 
      )}
    </div>
  )
}
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string
};

function Item ({ children, className = '', title='', link = '/', eventKey, index, ...props }) {
  // 1. Initialize variables
  const { activeKey, setActiveKey  } = useContext(DropDownContext);
  const isActive                     = (eventKey === activeKey);

  // 2. Check if this item has children (for nested items)
  let hasChildren = React.Children.toArray(children).some((child) => {
    return child.type === Item;
  });
  
  // 3. Handling item when it's clicked 
  const handleItemClick = useCallback((e) => {
    e.preventDefault();
    setActiveKey(eventKey);
  }, [eventKey, setActiveKey]);
  
  return (
    <div 
      onClick={ handleItemClick } 
      className={`na-dropdown-sub-menu ${className} ${isActive ? 'active' : ''}`.trim()}
      style={{ '--nth': index }} 
      {...props}
    >
      {hasChildren ? 
      (<>
          <span className='na-dropdown-sub-menu-plain'> {title} </span>
          <span className='na-dropdown-sub-menu-icon'> <VscChevronRight /> </span>
          <div className="na-dropdown-sub-menu-container">
            {children}
          </div>
      </>) : 
      (<a href={link}>{title}</a>)
      }
    </div>
  )
}
Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  eventKey: PropTypes.string,
  index: PropTypes.number
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