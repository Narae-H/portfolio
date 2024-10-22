import PropTypes from 'prop-types';
import './../styles/Editor.css'
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosClose } from 'react-icons/io';
import { transformToLink } from '../utils/common';

// const EditorContext = React.createContext();

export const Editor = ({ children,  id = '', className = '', ...props }) => {
  return(
    <>
      <div id={id} className={`na-editor ${className}`.trim()} >
        {/* <EditorContext.Provider value={{props}}> */}
          { children }
        {/* </EditorContext.Provider> */}
      </div>
    </>
  )
}
Editor.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}

function Header ({ children, id = '', className = '' , ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-header ${className}`.trim()} >
        <div className='na-editor-tabs'>
          { children }
        </div>
      </div>
    </>
  )
}
Header.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}


function HeaderTab ({ children, id = '', className = '', title = '', link = '', icon, removeVisitedMenu, ...props }) {
  // 1. Variables
  const navigate                  = useNavigate();
  const location                  = useLocation();
  const [activeTab, setActiveTab] = useState('welcome');

  // 2. Set an active tab
  useEffect(() => {
    const getCurrentTab = () => {
      const pathSegments = location.pathname.split('/');
      return pathSegments[pathSegments.length - 1];
    };
  
    const updateActiveTab = (tab) => {
      if (tab && tab !== '' && tab !== 'skills') {
        setActiveTab(tab);
      }
    };
  
    const currentTab = getCurrentTab();
    updateActiveTab(currentTab);
  }, [location, setActiveTab]);
  

  // 3. When a tab is selected
  const handleLink = useCallback((e) => {
    e.stopPropagation();

    const selectedTab = transformToLink(e.currentTarget.innerText);
    if ( activeTab !== selectedTab ) {
      setActiveTab(selectedTab);
      navigate(link);
    }
  }, [link, activeTab, navigate]);

  // 4. When a tab close button is clicked
  const handleClose = (e) => {
    e.stopPropagation();

    if (typeof removeVisitedMenu === 'function') {
      removeVisitedMenu(title); 
    }
  }

  return(
    <>
      <div id={id} className={`na-editor-tab-item ${activeTab === transformToLink(title)? 'active':'' } ${className}`.trim()} onClick={handleLink}>
        <span className='na-editor-tab-icon'>
          {icon && ( React.isValidElement(icon)? icon : <span className='title-icon'/>)}
        </span>
        <span className='na-editor-tab-link'>
          { title || children }
        </span>
        <span className="na-editor-tab-close" onClick={handleClose}><IoIosClose /></span>
      </div>
    </>
  )
}
HeaderTab.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.elementType]),
  removeVisitedMenu: PropTypes.func
}

function Body ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-body ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}
Body.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}

function Title ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <h1 id={id} className={`na-editor-title ${className}`.trim()}>
        { children }
      </h1>
    </>
  )
}
Title.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}

function SubTitle ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <h2 id={id} className={`na-editor-subTitle ${className}`.trim()}>
        { children }
      </h2>
    </>
  )
}
SubTitle.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}

function SubSubTitle ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <h3 id={id} className={`na-editor-subSubTitle ${className}`.trim()}>
        { children }
      </h3>
    </>
  )
}
SubSubTitle.prototype = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
}


Editor.Header = Header;
Editor.HeaderTab = HeaderTab;
Editor.Body = Body;
Editor.Title = Title;
Editor.SubTitle = SubTitle;
Editor.SubSubTitle = SubSubTitle;
