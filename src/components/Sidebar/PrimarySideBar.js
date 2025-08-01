import { VscClearAll } from 'react-icons/vsc'
import '../../styles/PrimarySideBar.css'

export const PrimarySideBar = ({ children,  id = '', className = '' }) => {
  return (
    <>
      <div id={id} className={`na-primary-sidebar ${className}`.trim()}>
        {children}
      </div>
    </>
  )
}


function Header ({ children, id = '', className = '', ...props }) {
  return (
    <>
      <div id={id} className={`na-primary-sidebar-header ${className}`.trim()} {...props}>
        { children }
      </div>
    </>
  )
}

function Title ({ children, id = '', className = '', title,  ...props }) {
  return(
    <>
      <div className={`sidebar-title-wrapper ${className}`.trim() } {...props}>
        <div id={id} className='na-primary-sidebar-title'>
          { title || children}
        </div>
      </div>
    </>
  )
}

function SearchArea ({ children, id = '', className = '', ...props }) {
  return (
    <>
      <div id={id} className={`na-primary-sidebar-search-area ${className}`.trim() } {...props} >
        <input type='text' className='na-primary-sidebar-search'>
          {children}
        </input>
        <div className='na-clear-button lg-icon'>
          <VscClearAll />
        </div>
      </div>
    </>
  )
}

function Body ({ children, id = '', className = '', ...props }) {
  return (
    <>
      <div id={id} className={`na-primary-sidebar-body ${className}`.trim()} {...props} >
        {children}
      </div>
    </>
  )
}

PrimarySideBar.Header = Header;
PrimarySideBar.Title = Title;
PrimarySideBar.SearchArea = SearchArea;
PrimarySideBar.Body = Body;