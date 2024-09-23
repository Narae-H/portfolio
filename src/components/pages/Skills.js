import './../../styles/pages/Skills.css'
import 'rsuite/dist/rsuite.min.css';

import { VscRefresh } from "react-icons/vsc";
import { Editor } from "../Editor";
import { PrimarySideBar } from "../PrimarySideBar";
import { CollapsibleList } from '../CollapsibleList';
import { Nav, Sidenav } from 'rsuite';

function Skills () {
  return (
    <>
      <div style={{ width: 240 }}>
        <Sidenav>
          <Sidenav.Body>
            <Nav activeKey="1">
              <Nav.Item eventKey="1">
                Dashboard
              </Nav.Item>
              <Nav.Item eventKey="2">
                User Group
              </Nav.Item>
              <Nav.Menu eventKey="3" title="Advanced">
                <Nav.Item eventKey="3-1">Geo</Nav.Item>
                <Nav.Item eventKey="3-2">Devices</Nav.Item>
                <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
              </Nav.Menu>
              <Nav.Menu eventKey="4" title="Settings">
                <Nav.Item eventKey="4-1">Applications</Nav.Item>
                <Nav.Item eventKey="4-2">Channels</Nav.Item>
                <Nav.Item eventKey="4-3">Versions</Nav.Item>
                <Nav.Menu eventKey="4-5" title="Custom Action">
                  <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                  <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                </Nav.Menu>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>

      {/* <PrimarySideBar>
        <PrimarySideBar.Header>
          <div className='sidebar-title-wrapper'>
            <PrimarySideBar.Title>Skills</PrimarySideBar.Title>
            <VscRefresh />
          </div>
          <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
        </PrimarySideBar.Header>
        <PrimarySideBar.Body>
          <CollapsibleList>
            <CollapsibleList.Item>
              Backend Development
              <CollapsibleList>
              </CollapsibleList>
            </CollapsibleList.Item>
          </CollapsibleList>
          
        </PrimarySideBar.Body>
      </PrimarySideBar> */}
      
      <Editor>
      </Editor>
    </>
  )
}

export default Skills;