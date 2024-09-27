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

const ListItem = ({ children, title, level = 1 }) => {
  const { defaultOpenLevels } = useContext(CollapsibleListContext);
  const [isOpen, setIsOpen] = useState(level <= defaultOpenLevels);
  const hasChildren = React.Children.toArray(children).some(child => child.type === ListItem);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <div className={`list-item ${isOpen ? 'open' : ''}`}>
        <div className="list-item-header" onClick={toggleOpen} style={{ '--depth': level - 1 }}>
          {hasChildren && (
            <span className="toggle-icon">
              {isOpen ? <VscChevronDown /> : <VscChevronRight />}
            </span>
          )}
          <span className="list-item-content">{title || children}</span>
        </div>
        {hasChildren && isOpen && (
        <div className="list-item-children">
          {React.Children.map(children, child => 
            child.type === ListItem ? React.cloneElement(child, { level: level + 1 }) : null
          )}
        </div>
        )}
      </div>    
    </>
  )
};

CollapsibleList.ListItem = ListItem;

