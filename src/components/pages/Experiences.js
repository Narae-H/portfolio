import './../../styles/pages/Experiences.css';

import { CollapsibleList } from "../CollapsibleList";
import { Editor } from "../Editor";
import { PrimarySideBar } from "../PrimarySideBar";

function Experiences () {
  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <PrimarySideBar.Title title='Experiences'/>
        </PrimarySideBar.Header>

        <PrimarySideBar.Body>
          <CollapsibleList defaultOpenLevels={0}>
            <CollapsibleList.ListItem title='Australia'>
              <CollapsibleList.ListItem title='Human Resource Database' />
              <CollapsibleList.ListItem title='Server Migration' />
              <CollapsibleList.ListItem title='Employee Capacity Report' />
              <CollapsibleList.ListItem title='H & H Lawyers Intranet' />
              <CollapsibleList.ListItem title='One Click Trade Mark Website' />
              <CollapsibleList.ListItem title='Finance Overview Dashboard' />
              <CollapsibleList.ListItem title='Individual Performance Dashboard' />
              <CollapsibleList.ListItem title='H &amp; H Lawyers Website and Server Migration' />
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Korea'>
              <CollapsibleList.ListItem title='STMS Management'/>
              <CollapsibleList.ListItem title='Project Lifecycle Management'/>
              <CollapsibleList.ListItem title='Traffic Information System'/>
              <CollapsibleList.ListItem title='STMS Management'/>
              <CollapsibleList.ListItem title='MPIS'/>
              <CollapsibleList.ListItem title='MPASIS'/>
              <CollapsibleList.ListItem title='POC'/>
              <CollapsibleList.ListItem title='System Management'/>
            </CollapsibleList.ListItem>
          </CollapsibleList>
          
        </PrimarySideBar.Body>
      </PrimarySideBar>
      
      <Editor>
      </Editor>
    </>
  )
}

export default Experiences;