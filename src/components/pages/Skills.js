import './../../styles/pages/Skills.css'

import { VscRefresh } from "react-icons/vsc";
import { Editor } from "../Editor";
import { PrimarySideBar } from "../PrimarySideBar";
import { CollapsibleList } from '../CollapsibleList';

function Skills () {
  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <div className='sidebar-title-wrapper'>
            <PrimarySideBar.Title>Skills</PrimarySideBar.Title>
            <VscRefresh />
          </div>
          <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
        </PrimarySideBar.Header>
        <PrimarySideBar.Body>

          <CollapsibleList defaultOpenLevels={0}>
            <CollapsibleList.ListItem title="Category 1">
              <CollapsibleList.ListItem title="Subcategory 1.1">
                <CollapsibleList.ListItem>Subcategory 1.1.1</CollapsibleList.ListItem>
                <CollapsibleList.ListItem>Subcategory 1.1.2</CollapsibleList.ListItem>
              </CollapsibleList.ListItem>
              <CollapsibleList.ListItem title="Subcategory 1.2">
              </CollapsibleList.ListItem>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title="Category 2">
              <CollapsibleList.ListItem>Subcategory 2.1</CollapsibleList.ListItem>
              <CollapsibleList.ListItem>Subcategory 2.2</CollapsibleList.ListItem>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem>Category 3</CollapsibleList.ListItem>
          </CollapsibleList>
          
        </PrimarySideBar.Body>
      </PrimarySideBar>
      
      <Editor>
      </Editor>
    </>
  )
}

export default Skills;