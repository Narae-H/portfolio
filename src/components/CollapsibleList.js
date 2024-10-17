import './../styles/CollapsibleList.css';

import React, { createContext, useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { VscChevronDown, VscChevronRight } from 'react-icons/vsc';
import { useLocation, useNavigate } from 'react-router-dom';

import { useLocalStorage } from '../hooks/useLocalStorage';

const CollapsibleListContext = createContext();
const SKILLS_KEY = 'visited-skills';

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

function ListItem ({ children, parentTitle = '', title = '', link, icon: IconComponent, level = 1, ...props }) {
  // 1. Get the current level of list
  const navigate = useNavigate();
  const location = useLocation();

  const { defaultOpenLevels } = useContext(CollapsibleListContext);
  const [isOpen, setIsOpen] = useState(() => {
    return location.state?.menuState?.[title] || level <= defaultOpenLevels;
  });
  
 
  // 2. ListItem children
  let childrenCount = 0;
  let hasChildren   = false;
  React.Children.toArray(children).forEach(child => {
    if( child.type === ListItem ){
      childrenCount += 1;
      hasChildren = true;
    } 
  });
  
  //4. navigate or toggle:open/close menu
  const newMenuState = {
    ...(location.state?.menuState || {}),
    [parentTitle]: !isOpen
  };

  // const {store, setStorage} = useLocalStorage('visited-skills');
  
  const handleToggleMenu = (hasChildren) => {
    console.log(`hasChildren => ${hasChildren}`);
    console.log('CollapsibleList.js clicked: handleToggleMenu')
    //setIsOpen(!isOpen);
    
    // hasChildren &&  
    
    if( hasChildren ) {
      setIsOpen(!isOpen);
    }else {
      navigate(link, { state: { menuState: newMenuState } });
    }

    // if (link) {
      // If a link is provided, navigate to it
      // const updatedVisitedSkillsArr = store ? [...store, title] : [title];
      // console.log( updatedVisitedSkillsArr );

      // setStorage(updatedVisitedSkillsArr);
      // navigate(link, { state: { menuState: newMenuState } });

    // } else {
      // If no link, toggle the menu open/closed
      //setIsOpen(!isOpen);
    // }
  }

  return (
    <>
      <div className={`list-item ${isOpen ? 'open' : ''}`} {...props}>
        <div className="list-item-header" onClick={() => handleToggleMenu(hasChildren)} style={{ '--depth': level - 1 }}>
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
                  child.type === ListItem ? React.cloneElement(child, { level: level + 1, parentTitle: title }) : null
                )
              : null}
            </div>
          )}
      </div>    
    </>
  )
};
ListItem.propTypes = {
  parentTitle: PropTypes.node,
  children: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  level: PropTypes.number
}

CollapsibleList.ListItem = ListItem;

