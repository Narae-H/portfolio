import React, { createContext, useContext, useState } from 'react';
import './../styles/CollapsibleList.css';
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

const ListItem = ({ children, title, icon, level = 1, ...props }) => {
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
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`list-item ${isOpen ? 'open' : ''}`}>
        <div className="list-item-header" onClick={toggleOpen} style={{ '--depth': level - 1 }}>
          { hasChildren && (
            <span className="toggle-icon">
              {isOpen ? <VscChevronDown /> : <VscChevronRight />}
            </span>
          )}
          <span className="list-item-content">
            {icon && ( React.isValidElement(icon)? icon : <icon className='title-icon'/>)}
            {<span className='list-title-name'> {title} </span> || children}
          </span>
        </div>
          { hasChildren && (
            <div className="list-item-children" style={{ '--childrenCount': childrenCount }}>
            {isOpen && (
            <>
            {React.Children.map(children, child => 
              child.type === ListItem ? React.cloneElement(child, { level: level + 1 }) : null
            )}
            </>
          )}
          </div>
        )}
      </div>    
    </>
  )
};

CollapsibleList.ListItem = ListItem;

