import './../styles/Editor.css'
import React from "react";


const EditorContext = React.createContext();

// const useEditorContext = () => {
//   const context = React.useContext(Editor)
// }

export function Editor (props) {
  // const [header, body] = React.useState(false);
  // console.log({props}.props);

  return(
    <>
      <div className='na-editor'>
        {/* <EditorContext.Provider value={{header}}> */}
          {props.children}
        {/* </EditorContext.Provider> */}
      </div>
    </>
  )
}

function Header({ children }) {
  return(
    <>
      <div className='na-editor-header'>
        <div className='na-editor-tabs'>
          { children }
        </div>
      </div>
    </>
  )
}

function HeaderTab({ children }) {
  return(
    <>
      <div className='na-editor-tab-item'>
        <a href='#link' className='na-editor-tab-link'>
          { children }
        </a>
      </div>
    </>
  )
}

function HeaderTabIcon ({ children }) {
  return (
    <span className='na-editor-icon'>
      {children}
    </span>
  )
}
function HeaderTabTitle ({ children }) {
  return (
    <span className='na-editor-title'>
      {children}
    </span>
  )
}

function Body({ children }) {
  console.log( { children } );
  return(
    <>
      <div className='na-editor-body'>
        { children }
      </div>
    </>
  )
}

Editor.Header = Header;
Editor.HeaderTab = HeaderTab;
Editor.HeaderTabIcon = HeaderTabIcon;
Editor.HeaderTabTitle = HeaderTabTitle;
Editor.Body = Body;
