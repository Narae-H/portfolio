import './../styles/EditorBlog.css';

import React from 'react';
// import { VscChevronUp } from 'react-icons/vsc';

export const EditorBlog = ({ children, id = '', className = '', ...props }) => {
  return (
    <div id={id} className={`na-editor-blog ${className}`.trim()} {...props}>
      { children }
    </div>  
  )
}

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

function OverviewContent ({ children, id = '', className = '', ...props }) {
  return (
    <div className={`na-editor-blog-description-wrapper ${className}`.trim()} {...props}>
      { children }
    </div>
  )
}

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

function DetailsNav ({ children, id = '', className = '', title = '', isActive= false,  ...props }) {
  return (
    <div id={id} className={`na-editor-blog-details-nav-wrapper ${className}`.trim()} {...props}>
      { title || children }
    </div>
  )
}

function DetailsBody ({ children, id = '', className = '', ...props }) {
  return (
    <div id={id} className={`na-editor-blog-details-body ${className}`.trim()} {...props}>
      { children }
    </div>
  )
}

EditorBlog.Overview        = Overview;
EditorBlog.OverviewTitle   = OverviewTitle;
EditorBlog.OverviewContent = OverviewContent;
EditorBlog.Details         = Details;
EditorBlog.DetailsNav      = DetailsNav;
EditorBlog.DetailsBody     = DetailsBody;



