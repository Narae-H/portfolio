import './../styles/TopMenuBar.css';

import { topMenus } from './../components/data/topMenuBar';
import { defaultTheme, tokyoNightTheme } from "./../theme/theme";

function TopMenuBar(){

  const leftMenus  = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];
  const rightMenus = ['windowMinimize', 'WindowRestore', 'WindowClose'];

  const iconColor = defaultTheme.base.activeTextColor;

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
                <div className={(name =='WindowClose')? 'menu-img close':'menu-img'}>{topMenus[name].icon(16, 16, iconColor)}</div>
              )
            })  
          }
        </div>
      </div>
    </>
  )
}

export default TopMenuBar;