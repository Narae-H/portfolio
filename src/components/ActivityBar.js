import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faGraduationCap, faCode} from '@fortawesome/free-solid-svg-icons';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import { defaultTheme, tokyoNightTheme } from "./../theme/theme";


function ActivityBar(){

  // 1. Get icon color by selected theme
  // getTheme()
  // 2) color
  const iconColor = defaultTheme.activitybar.foreground;

  return(
    <>
      <div id='activity-wrapper'>
        <div className='left-menu'>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto d-flex flex-column justify-content-center">
                <Nav.Link href="#home"><FontAwesomeIcon icon={faCopy} color={iconColor} /></Nav.Link>
                <Nav.Link href="#home"><FontAwesomeIcon icon={faGraduationCap} color={iconColor} /></Nav.Link>
                <Nav.Link href="#home"><FontAwesomeIcon icon={faCode} color={iconColor} /></Nav.Link>
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