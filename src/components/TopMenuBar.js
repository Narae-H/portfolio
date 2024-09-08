import './../styles/TopMenuBar.css';

import { useLocalStorage } from './../hooks/localStorage'

import { topMenus } from './../components/data/topMenuBar';

function TopMenuBar(){
  // 1. Selected Theme
  const [localThemeObj] = useLocalStorage();
  const iconColor       = localThemeObj.base.activeTextColor;
  
  // 2. Menus
  const leftMenus  = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];
  const rightMenus = ['windowMinimize', 'windowRestore', 'windowClose'];

  return(
    <>
      <div id='top-menu-wrapper'>
        <div className='left-menu'>
          <div className='menu-main-img'>
            {topMenus['vsCode'].icon(24, 24)}
          </div>
          {
            leftMenus.map( (item, i) => {
              return (
                <p className='menu-icon' key={i}>{item}</p>
              )
            })
          }
        </div>

        <div className='right-menu'>
          {
            rightMenus.map( (name, icon) => {
              return (
                <div className={(name ==='WindowClose')? 'menu-img close':'menu-img'} key={name}> {topMenus[name].icon(16, 16, iconColor)} </div>
              )
            })  
          }
        </div>
      </div>
    </>
  )
}

export default TopMenuBar;