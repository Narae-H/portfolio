import './../styles/TopMenuBar.css';

import { useSelector } from 'react-redux';

import { topMenus } from './../components/data/topMenuBar';
import { VscChromeClose, VscChromeMinimize, VscChromeRestore, VscMail } from "react-icons/vsc";


function TopMenuBar(){
  // 1. Menus for mobile
  let mainMenu = useSelector( (state) => state.mainMenu );

  return(
    <>
      <div id='top-menu-wrapper'>
        <div className='left-menu'>
          <div className='menu-main-img'>
            {topMenus['vsCode'].icon(24, 24)}
          </div>
          <p className='menu-icon bp-lg'>File</p>
          <p className='menu-icon bp-lg'>Edit</p>
          <p className='menu-icon bp-lg'>Selection</p>
          <p className='menu-icon bp-lg'>View</p>
          <p className='menu-icon bp-lg'>Go</p>
          <p className='menu-icon bp-lg'>Run</p>
          <p className='menu-icon bp-lg'>Terminal</p>
          <p className='menu-icon bp-lg'>Help</p>

          {
            mainMenu.map( (item) => {
              return (
                <a href={`#menu-${item.name}`} key={item.name} className='menu-icon bp-md'>{item.name}</a>
              )
            })
          }
        </div>

        <div className='right-menu'>
          <div className='menu-img bp-lg'> <VscChromeMinimize /> </div>
          <div className='menu-img bp-lg'> <VscChromeRestore /> </div>
          <div className='menu-img bp-lg close'> <VscChromeClose /> </div>
          <a href='#contactme' className='menu-img bp-md'><VscMail /></a>
        </div>
      </div>
    </>
  )
}

export default TopMenuBar;