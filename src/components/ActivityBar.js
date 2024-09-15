import './../styles/ActivityBar.css';

import { Tooltip } from 'react-tooltip';
import CapitalizedComponent from '../utils/common';
import { useSelector } from 'react-redux';

function ActivityBar(){
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );
  let subMenu  = useSelector( (state) => state.subMenu );

  return(
    <>
      <div id='activity-wrapper'>
        <div className='top-menu'>
            {
              mainMenu.map( (iconObj)=>{
                return(
                  <a 
                    href={`/${iconObj.name}`} 
                    key={`tooltip-link-${iconObj.name}`} 
                    className={(iconObj.name === 'home')? 'na-nav-link active':'na-nav-link'} 
                    data-tooltip-id='tooltip-activity-bar' 
                    data-tooltip-place='right'
                    data-tooltip-content={iconObj.name}>
                    <CapitalizedComponent type={iconObj.iconName} className='activity-icon' />
                  </a>
                )
              })
            }
        </div>

        <div className='bottom-menu'>
        {
          subMenu.map( (iconObj)=>{
            return(
              <a 
                href={`#menu-${iconObj.name}`} 
                key={`tooltip-link-${iconObj.name}`} 
                className='na-nav-link' 
                data-tooltip-id='tooltip-activity-bar' 
                data-tooltip-place='right'
                data-tooltip-content={iconObj.name}>
                <CapitalizedComponent type={iconObj.iconName} className='activity-icon'/>
              </a>
            )
          })
        }
        </div>

        <Tooltip id='tooltip-activity-bar' className="na-tooltip" style={{backbround: 'yellow'}}/>
      
      </div>
    </>
  )
}

export default ActivityBar;