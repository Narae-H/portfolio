import { Card, Nav } from 'react-bootstrap';
import './../styles/EditorArea.css';
import { VscClose, VscVscode } from 'react-icons/vsc';

function EditorArea() {

  return(
    <>
      <Card className='na-card'>
        <Card.Header className='na-card-header'>
          <Nav variant="tabs" defaultActiveKey="#first" className='na-card-header-tabs'>
            <Nav.Item>
              <Nav.Link href="#first" className='na-nav-link na-active'>
                <VscVscode className='na-nav-link-icon icon-lg f-blue'/> 
                Welcome &nbsp;
                <VscClose className='na-nav-link-icon icon-sm'/>
                </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Body className='na-card-body'>
            <div className='row'>
              <h2>Narae Hyeon</h2>
              <h4 className='f-grey'>Full Stack Java Developer</h4>
            </div>
            <div className='row'>
              <div className='col-6'>

              </div>
              <div className='col-6'>

              </div>

            </div>
            
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  )
}

export default EditorArea;