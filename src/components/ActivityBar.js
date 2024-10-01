import './../styles/ActivityBar.css';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Tooltip } from './Tooltip';
import { Icon } from '../assets/customIcon/Icon';

function ActivityBar(){
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );
  let subMenu  = useSelector( (state) => state.subMenu );

  // 2. Get the current page
  let location  = useLocation();
  const isActive = (itemPath) => {
    if( itemPath === 'home' && location.pathname === '/' ) {
      return true;
    } else {
      return location.pathname === `/${itemPath}`;
    }
  };
  
  
  return(
    <>
      <div id='activity-wrapper'>
        <div className='top-menu'>
          {
            mainMenu.map( (iconObj)=>{
              return(
                <Tooltip content={iconObj.tooltip} position="right" hasArrow={true} key={iconObj.name}>
                  <a href={`/${iconObj.name}`} className={`na-nav-link ${isActive(iconObj.name) ? 'active' : ''}`}>
                    <Icon name={iconObj.name} className='activity-icon'/>
                  </a>
                </Tooltip>
              )
            })
          }
        </div>

        <div className='bottom-menu'>
        {
          subMenu.map( (iconObj)=>{
            return(
              <Tooltip content={iconObj.tooltip} position="right" hasArrow={true} key={iconObj.name}>
                <a href={`/${iconObj.name}`} className={`na-nav-link ${isActive(iconObj.name) ? 'active' : ''}`}>
                  <Icon name={iconObj.name} className='activity-icon'/>
                </a>
              </Tooltip>
            )
          })
        }
        </div>
      </div>
    </>
  )
}

export default ActivityBar;