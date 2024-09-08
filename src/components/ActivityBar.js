import { Nav, Navbar } from 'react-bootstrap';
import { useLocalStorage } from '../hooks/localStorage';

import { activityMenus } from './../components/data/activityBar';

function ActivityBar(){
  // 1. Selected Theme
  const [localThemeObj] = useLocalStorage();
  const iconColor = localThemeObj.activitybar.foreground;

  // 2. Menus
  const topMenus    = ['home', 'skills', 'experiences', 'github'];
  const bottomMenus = ['contactMe', 'settings'];
  

  return(
    <>
      <div id='activity-wrapper'>
        <div className='left-menu'>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto d-flex flex-column justify-content-center">
                {
                  topMenus.map( (name, icon)=>{
                    return(
                      <Nav.Link href="#home">{activityMenus[name].icon(20, 20, iconColor)}</Nav.Link>
                    )
                  })
                }
                {/* <Nav.Link href="#home"><FontAwesomeIcon icon={faGraduationCap} color={iconColor} /></Nav.Link>
                <Nav.Link href="#home"><FontAwesomeIcon icon={faCode} color={iconColor} /></Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>

        

        <div className='right-menu'>

        </div>
      </div>
    </>
  )
}

export default ActivityBar;