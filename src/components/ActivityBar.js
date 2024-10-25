import './../styles/ActivityBar.css';

import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { Tooltip } from './Tooltip';
import { Icon } from '../assets/customIcon/Icon';
import React, { useMemo } from 'react';

const ActivityBar = React.memo( ()=>{
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );

  // 2. Get the current page
  let location  = useLocation();
  const isActive = useMemo( () => (itemPath) => {
    if( itemPath === 'home' && location.pathname === '/' ) {
      return true;
    } else {
      return location.pathname?.split("/")[1] === itemPath;
    }
  }, [location.pathname])
  // let location  = useLocation();
  // const isActive = (itemPath) => {
  //   if( itemPath === 'home' && location.pathname === '/' ) {
  //     return true;
  //   } else {
  //     return location.pathname?.split("/")[1] === itemPath;
  //   }
  // };
  
  
  return(
    <>
      <div id='activity-wrapper'>
        <div className='top-menu'>
          {
            mainMenu.map( (iconObj)=>{
              return(
                <Tooltip content={iconObj.tooltip} position="right" hasArrow={true} key={iconObj.name}>
                  <Link to={`/${iconObj.name}`} className={`na-nav-link ${isActive(iconObj.name) ? 'active' : ''}`}>
                    <Icon name={iconObj.name} className='activity-icon'/>
                  </Link>
                </Tooltip>
              )
            })
          }
        </div>

        <div className='bottom-menu'>
          <Tooltip content='Contact Me' position="right" hasArrow={true}>
            <a href='/contactme' className={`na-nav-link ${isActive('contactme') ? 'active' : ''}`}>
              <Icon name='contactme' className='activity-icon'/>
            </a>
          </Tooltip>

        </div>
      </div>
    </>
  )
});

export default ActivityBar;