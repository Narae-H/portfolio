import './../../styles/pages/Skills.css'

import { Editor } from '../Editor';
import { PrimarySideBar } from '../PrimarySideBar';
import { CollapsibleList } from '../CollapsibleList';
import { Icon } from '../../assets/customIcon/Icon';

function Skills () {
  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <div className='sidebar-title-wrapper'>
            <PrimarySideBar.Title title='Skills'/>
          </div>
          <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
        </PrimarySideBar.Header>
        <PrimarySideBar.Body>

          <CollapsibleList defaultOpenLevels={0}>
            <CollapsibleList.ListItem title='Back End Skills'>
              <CollapsibleList.ListItem title='Java' icon={<Icon name='java'/>} />
              <CollapsibleList.ListItem title='Spring Boot' icon={<Icon name='springboot'/>}/>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Front End Skills'>
              <CollapsibleList.ListItem title='HTML'icon={<Icon name='html'/>}/>
              <CollapsibleList.ListItem title='CSS'icon={<Icon name='css'/>}/>
              <CollapsibleList.ListItem title='JavaScript' icon={<Icon name='javascript'/>}/>
              <CollapsibleList.ListItem title='React' icon={<Icon name='react'/>}/>
              <CollapsibleList.ListItem title='Redux Toolkit' icon={<Icon name='reduxtoolkit'/>}/>
              <CollapsibleList.ListItem title='BootStrap' icon={<Icon name='bootstrap'/>}/>
              <CollapsibleList.ListItem title='Thymeleaf' icon={<Icon name='thymeleaf'/>}/>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Database Skills'>
              <CollapsibleList.ListItem title='MySQL' icon={<Icon name='mysql'/>}/>
              <CollapsibleList.ListItem title='Maria DB' icon={<Icon name='mariadb'/>}/>
              <CollapsibleList.ListItem title='Azure DB' icon={<Icon name='azuredb'/>}/>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Cloud Services'>
              <CollapsibleList.ListItem title='AWS' icon={<Icon name='aws'/>}/>
              <CollapsibleList.ListItem title='Microsoft' icon={<Icon name='microsoft'/>}/>
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Others'>
              <CollapsibleList.ListItem title='Code Version Control123456789' icon={<Icon name='codeversioncontrol'/>}/>
              <CollapsibleList.ListItem title='SEO' icon={<Icon name='seo'/>}/>
              <CollapsibleList.ListItem title='MS Office App' icon={<Icon name='msofficeapp'/>}/>
              <CollapsibleList.ListItem title='MS Power Platform' icon={<Icon name='mspowerplatform'/>}/>
            </CollapsibleList.ListItem>
          </CollapsibleList>
          
        </PrimarySideBar.Body>
      </PrimarySideBar>
      
      <Editor>
      </Editor>
    </>
  )
}

export default Skills;