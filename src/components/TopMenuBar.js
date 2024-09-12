import './../styles/TopMenuBar.css';

import { topMenus } from './../components/data/topMenuBar';
import { VscChromeClose, VscChromeMinimize, VscChromeRestore } from "react-icons/vsc";


function TopMenuBar(){
  return(
    <>
      <div id='top-menu-wrapper'>
        <div className='left-menu'>
          <div className='menu-main-img'>
            {topMenus['vsCode'].icon(24, 24)}
          </div>
          <p className='menu-icon'>File</p>
          <p className='menu-icon'>Edit</p>
          <p className='menu-icon'>Selection</p>
          <p className='menu-icon'>View</p>
          <p className='menu-icon'>Go</p>
          <p className='menu-icon'>Run</p>
          <p className='menu-icon'>Terminal</p>
          <p className='menu-icon'>Help</p>
        </div>

        <div className='right-menu'>
          <div className='menu-img'> <VscChromeMinimize /> </div>
          <div className='menu-img'> <VscChromeRestore /> </div>
          <div className='menu-img close'> <VscChromeClose /> </div>
        </div>
      </div>
    </>
  )
}

export default TopMenuBar;