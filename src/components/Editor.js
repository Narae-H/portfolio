import './../styles/Editor.css'
import React from "react";

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

function HeaderTab ({ children, id = '', className = '', title, icon, ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-tab-item ${className}`.trim()}>
        <span className='na-editor-tab-icon'>
          {icon && ( React.isValidElement(icon)? icon : <span className='title-icon'/>)}
        </span>
        <a href='#link' className='na-editor-tab-link'>
          { title || children }
        </a>
      </div>
    </>
  )
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
function Title ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <h1 id={id} className={`na-editor-title ${className}`.trim()}>
        { children }
      </h1>
    </>
  )
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
function SubSubTitle ({ children, id = '', className = '', ...props }) {
  return(
    <>
      <h3 id={id} className={`na-editor-subSubTitle ${className}`.trim()}>
        { children }
      </h3>
    </>
  )
}


Editor.Header = Header;
Editor.HeaderTab = HeaderTab;
Editor.Body = Body;
Editor.Title = Title;
Editor.SubTitle = SubTitle;
Editor.SubSubTitle = SubSubTitle;
