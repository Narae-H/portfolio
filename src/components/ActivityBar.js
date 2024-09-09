import './../styles/ActivityBar.css';

import { Nav, Navbar } from 'react-bootstrap';
import { useLocalStorage } from '../hooks/localStorage';

import { activityMenus } from './../components/data/activityBar';
import { Tooltip } from 'react-tooltip';

function ActivityBar(){
  // 1. Selected Theme
  const [localThemeObj] = useLocalStorage();
  const iconInaviceColor = localThemeObj.activitybar.inactiveForeground;

  // 2. Menus
  const topMenus    = ['home', 'skills', 'experiences', 'github'];
  const bottomMenus = ['contactMe', 'settings'];

  return(
    <>
      <div id='activity-wrapper'>
        <div className='top-menu'>
          {/* <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto d-flex flex-column justify-content-center">
                {
                  topMenus.map( (name)=>{
                    return(
                      <Nav.Link 
                        href={`#menu-${name}`} 
                        key={`tooltip-link-${name}`} 
                        className="na-nav-link" 
                        data-tooltip-id='tooltip-activity-bar' 
                        data-tooltip-place="right"
                        data-tooltip-content={name}>
                        {activityMenus[name].icon(25, 25, iconInaviceColor)}
                      </Nav.Link>
                    )
                  })
                }
              </Nav>
              </Navbar.Collapse>
              </Navbar> */}
            {
              topMenus.map( (name)=>{
                return(
                  <a 
                    href={`#menu-${name}`} 
                    key={`tooltip-link-${name}`} 
                    className={(name=='home')? 'na-nav-link active':'na-nav-link'} 
                    data-tooltip-id='tooltip-activity-bar' 
                    data-tooltip-place='right'
                    data-tooltip-content={name}>
                    {activityMenus[name].icon(25, 25, iconInaviceColor)}
                  </a>
                )
              })
            }
        </div>

        <div className='bottom-menu'>
        {
          bottomMenus.map( (name)=>{
            return(
              <a 
                href={`#menu-${name}`} 
                key={`tooltip-link-${name}`} 
                className='na-nav-link' 
                data-tooltip-id='tooltip-activity-bar' 
                data-tooltip-place='right'
                data-tooltip-content={name}>
                {activityMenus[name].icon(25, 25, iconInaviceColor)}
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