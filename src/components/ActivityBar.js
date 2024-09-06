import { Nav, Navbar } from 'react-bootstrap';
import { useLocalStorage } from '../hooks/localStorage';

function ActivityBar(){
  // 1. Selected Theme
  const [localThemeObj] = useLocalStorage();
  const iconColor = localThemeObj.activitybar.foreground;

  return(
    <>
      <div id='activity-wrapper'>
        <div className='left-menu'>
          <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto d-flex flex-column justify-content-center">
                {/* <Nav.Link href="#home"><FontAwesomeIcon icon={faCopy} color={iconColor} /></Nav.Link>
                <Nav.Link href="#home"><FontAwesomeIcon icon={faGraduationCap} color={iconColor} /></Nav.Link>
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