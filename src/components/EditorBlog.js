import './../styles/EditorBlog.css';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
// import { VscChevronUp } from 'react-icons/vsc';

const EditorBlogContext = createContext();

export const EditorBlog = ({ children, id = '', className = '', ...props }) => {
  return (
    <div id={id} className={`na-editor-blog ${className}`.trim()} {...props}>
      { children }
    </div>  
  )
}
EditorBlog.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};

/**
 * Header
 */
function Overview ({ children, id = '', className = '', ...props }) {
  return (
    <div id={id} className={`na-editor-blog-overview ${className}`.trim()} {...props}>
      { children }
    </div>
  )
}
Overview.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};

function OverviewTitle ({ children, id = '', className = '', title, icon : IconComponent, ...props }) {
  return(
    <div className={`na-editor-blog-title-wrapper ${className}`.trim()} {...props}>
      <div className='na-editor-blog-title-icon'>
        {IconComponent && ( React.isValidElement(IconComponent)? IconComponent : <IconComponent />)}
      </div>
      <div id={id} className='na-editor-blog-title-text'>
        { (title && (
          <h1> {title} </h1>
        )) || children}
      </div>
    </div>
  )
}
OverviewTitle.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

function OverviewContent ({ children, id = '', className = '', ...props }) {
  return (
    <div className={`na-editor-blog-description-wrapper ${className}`.trim()} {...props}>
      { children }
    </div>
  )
}
OverviewContent.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

/**
 * Details
 */
function Details ({ children, id = '', className = '', ...props }) {
  return (
    <>
      <div id={id} className={`na-editor-blog-details ${className}`.trim()} {...props}>
        { children }
      </div>
      <div id='go-to-top-button'>
        {/* <a id='scroll-top-top' role='button' href='#' title='#' aria-label='Go to top'><VscChevronUp /></a> */}
      </div>

    </>
  )
}
Details.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

function DetailsNav ({ children, id = '', className = '', activeKey: initialActiveKey, ...props }) {
  // 1. If the initialActiveKey is undefined, make the first nav to be active
  const firstValidChild = React.Children.toArray(children).find(
    child => React.isValidElement(child) && child.type === DetailsNavItem
  );
  initialActiveKey = initialActiveKey || (firstValidChild && firstValidChild.props.eventKey);
  
  const [activeKey, setActiveKey] = useState(initialActiveKey);
  
  const contextValue = useMemo(() => ({
    activeKey,
    setActiveKey
  }), [activeKey]);
  
  return (
    <EditorBlogContext.Provider value={ contextValue }>
      <div id={id} className={`na-editor-blog-details-nav-wrapper ${className}`.trim()} {...props}>
        <div className='na-editor-blog-details-navs'>
          { children }
        </div>
      </div>
    </EditorBlogContext.Provider>
  )
}
Details.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  activeKey: PropTypes.string
};

function DetailsNavItem ({ children, id = '', className = '', title, eventKey, icon, ...props }) {
  const { activeKey, setActiveKey  } = useContext(EditorBlogContext);
  const isActive = (eventKey === activeKey);
  
  const handleClick = (e) => {
    e.preventDefault();
    setActiveKey(eventKey);
  };

  return(
    <>
      <div 
        id={id} 
        className={`na-editor-blog-details-nav-item ${isActive && 'active'} ${className}`.trim()}
        {...props}
        onClick={ handleClick }
      >
        <span className='na-editor-blog-details-nav-icon'>
          {icon && ( React.isValidElement(icon)? icon : <span className='title-icon'/>)}
        </span>
        <a href='#link' className='na-editor-blog-details-nav-link'>
          { title || children }
        </a>
      </div>
    </>
  )
}
DetailsNavItem.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  eventKey: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
};


function DetailsBody ({ children, id = '', className = '', ...props }) {
  return (
    <div id={id} className={`na-editor-blog-details-body ${className}`.trim()} {...props}>
      { children }
    </div>
  )
}
DetailsBody.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};

function DetailsBodyH1 ({ children, id = '', className = '', title = '', ...props }) {
  return(
    <div id={id} className={`na-editor-blog-body-h1 ${className}`.trim()} {...props}>
      <h1> {title} </h1>
    </div>
  )
}
DetailsBodyH1.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string
};

function DetailsBodyContent ({ children, id = '', className = '', ...props }) {
  return(
    <div id={id} className={`na-editor-blog-body-content ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
DetailsBodyContent.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string
};



EditorBlog.Overview           = Overview;
EditorBlog.OverviewTitle      = OverviewTitle;
EditorBlog.OverviewContent    = OverviewContent;
EditorBlog.Details            = Details;
EditorBlog.DetailsNav         = DetailsNav;
EditorBlog.DetailsNavItem     = DetailsNavItem;
EditorBlog.DetailsBody        = DetailsBody;
EditorBlog.DetailsBodyH1      = DetailsBodyH1;
EditorBlog.DetailsBodyContent = DetailsBodyContent;



