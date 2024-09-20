import { VscClearAll } from 'react-icons/vsc'
import './../styles/PrimarySideBar.css'

export function PrimarySideBar(props) {
  return (
    <>
      <div id={props.id} className={`na-primary-sidebar ${props.className}`}>
        { props.children }
      </div>
    </>
  )
}

function Header({ children, id, className, ...props }) {
  return (
    <>
      <div className='na-primary-sidebar-header'>
        { children }
      </div>
    </>
  )
}

function Title({ children, id, className, ...props }) {
  return(
    <>
      <div id={props.id} className={`na-primary-sidebar-title ${props.className}`}>
        { children }
      </div>
    </>
  )
}

function SearchArea({ children, id, className, ...props }) {
  return (
    <>
      {/* <div className='na-primary-sidebar-search-area'>
        { children }
      </div> */}
      <div className='na-primary-sidebar-search-area'>
        <input type='text' className='na-primary-sidebar-search'>
          { children }
        </input>
        <div className='na-clear-button lg-icon'>
          <VscClearAll />
        </div>
      </div>
    </>
  )
}

function Body({ children, id, className, ...props }) {
  return (
    <>
      <div className='na-primary-sidebar-body'>
        { children }
      </div>
    </>
  )
}

PrimarySideBar.Header = Header;
PrimarySideBar.Title = Title;
PrimarySideBar.SearchArea = SearchArea;
PrimarySideBar.Body = Body;