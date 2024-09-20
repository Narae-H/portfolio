import './../../styles/pages/Skills.css'

import { VscRefresh } from "react-icons/vsc";
import { Editor } from "../Editor";
import { PrimarySideBar } from "../PrimarySideBar";

function Skills () {
  return (
    <>
      <div >
          <PrimarySideBar>
            <PrimarySideBar.Header>
              <div className='sidebar-title-wrapper'>
                <PrimarySideBar.Title>Skills</PrimarySideBar.Title>
                <VscRefresh />
              </div>
              <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
            </PrimarySideBar.Header>
            <PrimarySideBar.Body>
              
            </PrimarySideBar.Body>
          </PrimarySideBar>
          
          <Editor>
          </Editor>
      </div>
    </>
  )
}

export default Skills;