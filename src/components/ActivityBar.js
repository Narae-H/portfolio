import './../styles/ActivityBar.css';

import { Tooltip } from 'react-tooltip';
import CapitalizedComponent from '../utils/common';

function ActivityBar(){
  // 1. Menus
  const topMenus    = [ {name: 'home'       , iconName:'VscFiles'}
                       , {name: 'skills'     , iconName:'VscCode'}
                       , {name: 'experiences', iconName:'VscFolderLibrary'}
                       , {name: 'github'     , iconName:'VscGithub'}
                      ];

  const bottomMenus = [ {name: 'contactMe', iconName:'VscAccount'}
                      , {name: 'settings' , iconName:'VscSettingsGear'}
                      ];

  return(
    <>
      <div id='activity-wrapper'>
        <div className='top-menu'>
            {
              topMenus.map( (iconObj)=>{
                return(
                  <a 
                    href={`#menu-${iconObj.name}`} 
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
          bottomMenus.map( (iconObj)=>{
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