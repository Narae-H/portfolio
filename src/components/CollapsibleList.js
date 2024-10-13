import './../styles/CollapsibleList.css';

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';

const CollapsibleListContext = createContext();

export const CollapsibleList = ({ children, defaultOpenLevels = 1 }) => {
  return (
    <CollapsibleListContext.Provider value={{ defaultOpenLevels }}>
      <div className="collapsible-list">
        {children}
      </div>
    </CollapsibleListContext.Provider>
  );
};
CollapsibleList.prototype = {
  children: PropTypes.node,
  defaultOpenLevels: PropTypes.number
}

function ListItem ({ children, title = '', link, icon: IconComponent, level = 1, ...props }) {
  // 1. Get the current level of list
  const { defaultOpenLevels } = useContext(CollapsibleListContext);
  const [isOpen, setIsOpen] = useState(level <= defaultOpenLevels);

  // 2. ListItem children
  let childrenCount = 0;
  let hasChildren   = false;
  React.Children.toArray(children).forEach(child => {
    if( child.type === ListItem ){
      childrenCount += 1;
      hasChildren = true;
    }
  });

  //3. Toggle:open/close menu
  const handleToggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`list-item ${isOpen ? 'open' : ''}`}>
        <div className="list-item-header" onClick={handleToggleOpen} style={{ '--depth': level - 1 }}>
          { hasChildren && (
            <span className="toggle-icon">
              {isOpen ? <VscChevronDown /> : <VscChevronRight />}
            </span>
          )}
          <span className="list-item-content">
            {IconComponent && ( React.isValidElement(IconComponent)? IconComponent : <IconComponent />)}
            {<span className='list-title-name'> {title || children} </span> }
          </span>
        </div>
          { hasChildren && (
            <div className="list-item-children" style={{ '--childrenCount': childrenCount }}>
              {isOpen ? 
                React.Children.map(children, child => 
                  child.type === ListItem ? React.cloneElement(child, { level: level + 1 }) : null
                )
              : null}
            </div>
          )}
      </div>    
    </>
  )
};
ListItem.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  level: PropTypes.number
}

CollapsibleList.ListItem = ListItem;

