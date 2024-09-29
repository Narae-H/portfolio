import { VscClearAll } from 'react-icons/vsc'
import './../styles/PrimarySideBar.css'

export const PrimarySideBar = ({ children,  id = '', className = '' }) => {
  return (
    <>
      <div id={id} className={`na-primary-sidebar ${className}`.trim()}>
        {children}
      </div>
    </>
  )
}


const Header = ({ children, id = '', className = '', ...props }) => {
  return (
    <>
      <div id={id} className={`na-primary-sidebar-header ${className}`.trim()} {...props}>
        { children }
      </div>
    </>
  )
}

const Title = ({ children, id = '', className = '', title,  ...props }) => {
  return(
    <>
      <div id={id} className={`na-primary-sidebar-title ${className}`.trim()} {...props}>
        { title || children}
      </div>
    </>
  )
}

const SearchArea = ({ children, id = '', className = '', ...props }) => {
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

const Body = ({ children, id = '', className = '', ...props }) => {
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