import './../styles/Editor.css'
import React from "react";

// const EditorContext = React.createContext();

export function Editor (props) {
  return(
    <>
      <div id={props.id} className={`na-editor ${props.className}`}>
        {/* <EditorContext.Provider value={{props}}> */}
          {props.children}
        {/* </EditorContext.Provider> */}
      </div>
    </>
  )
}

function Header({ children, id, className, ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-header ${className}`}>
        <div className='na-editor-tabs'>
          { children }
        </div>
      </div>
    </>
  )
}

function HeaderTab({ children, id, className, ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-tab-item ${className}`}>
        <a href='#link' className='na-editor-tab-link'>
          { children }
        </a>
      </div>
    </>
  )
}

function HeaderTabIcon ({ children, id, className, ...props }) {
  return (
    <span id={id} className={`na-editor-tab-icon ${className}`}>
      {children}
    </span>
  )
}
function HeaderTabTitle ({ children, id, className, ...props }) {
  return (
    <span id={id} className={`na-editor-tab-title ${className}`}>
      {children}
    </span>
  )
}

function Body({ children, id, className, ...props }) {
  return(
    <>
      <div id={id} className={`na-editor-body ${className}`}>
        { children }
      </div>
    </>
  )
}
function Title({ children, id, className, ...props }) {
  return(
    <>
      <h1 id={id} className={`na-editor-title ${className}`}>
        { children }
      </h1>
    </>
  )
}
function SubTitle({ children, id, className, ...props }) {
  return(
    <>
      <h2 id={id} className={`na-editor-subTitle ${className}`}>
        { children }
      </h2>
    </>
  )
}
function SubSubTitle({ children, id, className, ...props }) {
  return(
    <>
      <h3 id={id} className={`na-editor-subSubTitle ${className}`}>
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
