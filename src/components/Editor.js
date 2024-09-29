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

const Header = ({ children, id, className, ...props }) => {
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

const HeaderTab = ({ children, id, className, ...props }) => {
  return(
    <>
      <div id={id} className={`na-editor-tab-item ${className}`.trim()}>
        <a href='#link' className='na-editor-tab-link'>
          { children }
        </a>
      </div>
    </>
  )
}

const HeaderTabIcon = ({ children, id, className, ...props }) => {
  return (
    <span id={id} className={`na-editor-tab-icon ${className}`.trim()}>
      {children}
    </span>
  )
}

const HeaderTabTitle = ({ children, id, className, ...props }) => {
  return (
    <span id={id} className={`na-editor-tab-title ${className}`.trim()}>
      {children}
    </span>
  )
}

const Body = ({ children, id, className, ...props }) => {
  return(
    <>
      <div id={id} className={`na-editor-body ${className}`.trim()}>
        { children }
      </div>
    </>
  )
}
const Title = ({ children, id, className, ...props }) => {
  return(
    <>
      <h1 id={id} className={`na-editor-title ${className}`.trim()}>
        { children }
      </h1>
    </>
  )
}
const SubTitle = ({ children, id, className, ...props }) => {
  return(
    <>
      <h2 id={id} className={`na-editor-subTitle ${className}`.trim()}>
        { children }
      </h2>
    </>
  )
}
const SubSubTitle = ({ children, id, className, ...props }) => {
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
Editor.HeaderTabIcon = HeaderTabIcon;
Editor.HeaderTabTitle = HeaderTabTitle;
Editor.Body = Body;
Editor.Title = Title;
Editor.SubTitle = SubTitle;
Editor.SubSubTitle = SubSubTitle;
