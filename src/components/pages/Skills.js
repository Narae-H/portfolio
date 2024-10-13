import './../../styles/pages/Skills.css'

import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { Editor } from '../Editor';
import { PrimarySideBar } from '../PrimarySideBar';
import { CollapsibleList } from '../CollapsibleList';
import { Icon } from '../../assets/customIcon/Icon';
import { EditorBlog } from '../EditorBlog';

function Skills ( props ) {
  // 1. Get sidebar menu
  const { data: skills, isSuccess1 } = useQuery(
                                          'menuMain',
                                          () => axios.get('/data/menu/menuMain.json'),
                                          {refetchOnWindowFocus: false,
                                          staleTime: Infinity}
  );
  console.log( isSuccess1);

  // 2. Get content
  let {id} = useParams();
  
  const { data: skillObj, isSuccess } = useQuery(
                                          ['Skills', id],
                                          () => axios.get(`/data/skills/${id}.json`).then( res => res.data),
                                          {refetchOnWindowFocus: false,
                                            staleTime: Infinity,
                                            enabled: !!id}
                                          );
    
  console.log( skillObj );
  
  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <PrimarySideBar.Title title='Skills'/>
          <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
        </PrimarySideBar.Header>

        <PrimarySideBar.Body>
          <CollapsibleList defaultOpenLevels={0}>
            <CollapsibleList.ListItem title='Back End Skills'>
              <CollapsibleList.ListItem icon={<Icon name='java'/>}> <Link to='/skills/java'>Java</Link> </CollapsibleList.ListItem>
              <CollapsibleList.ListItem title='Spring Boot' icon={<Icon name='springboot'/>} />
            </CollapsibleList.ListItem>
            <CollapsibleList.ListItem title='Front End Skills'>
              <CollapsibleList.ListItem title='HTML' icon={<Icon name='html'/>}/>
              <CollapsibleList.ListItem title='CSS' icon={<Icon name='css'/>}/>
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
              <CollapsibleList.ListItem title='Code Version Control' icon={<Icon name='codeversioncontrol'/>}/>
              <CollapsibleList.ListItem title='SEO' icon={<Icon name='seo'/>}/>
              <CollapsibleList.ListItem title='MS Office App' icon={<Icon name='msofficeapp'/>}/>
              <CollapsibleList.ListItem title='MS Power Platform' icon={<Icon name='mspowerplatform'/>}/>
            </CollapsibleList.ListItem>
          </CollapsibleList>
        </PrimarySideBar.Body>

      </PrimarySideBar>
      
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab title='Welcome' icon={<Icon name='skills' />} className='active' />
        </Editor.Header>

        {isSuccess?
        (
          <>
            <Editor.Body className='skills-editor-body'>
              <EditorBlog>
                <EditorBlog.Overview>
                  <EditorBlog.OverviewTitle title={skillObj.title} icon={<Icon name={skillObj.titleIconName} className='skills-icon' />} />
                  <EditorBlog.OverviewContent>
                    <p>{skillObj.overviewContent}</p>
                  </EditorBlog.OverviewContent>  
                </EditorBlog.Overview>
                <EditorBlog.Details>
                  <EditorBlog.DetailsNav activeKey='details'>
                    <EditorBlog.DetailsNavItem title='DETAILS' eventKey='details' >
                      <EditorBlog.DetailsBodyHeader title='Related Project'/>
                        {skillObj.relatedProject}
                      </EditorBlog.DetailsNavItem>
                  </EditorBlog.DetailsNav>
                </EditorBlog.Details>
              </EditorBlog>
            </Editor.Body>
          </>
        ): null
        }

        {/* <Editor.Body className='skills-editor-body'>
          <EditorBlog>
            <EditorBlog.Overview>
              <EditorBlog.OverviewTitle title='Java' icon={<Icon name='javalogo' className='skills-icon' />} />
              <EditorBlog.OverviewContent>
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on any Java-enabled device. Java was developed by Sun Microsystems (now Oracle Corporation).</p>
              </EditorBlog.OverviewContent>  
            </EditorBlog.Overview>
            <EditorBlog.Details>
              <EditorBlog.DetailsNav activeKey='java'>
                <EditorBlog.DetailsNavItem title='Java' eventKey='java' >
                  <EditorBlog.DetailsBodyHeader title='Body Header'/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                  Body Text<br/>
                </EditorBlog.DetailsNavItem>
                <EditorBlog.DetailsNavItem title='Test2' eventKey="test2"/>
              </EditorBlog.DetailsNav>

            </EditorBlog.Details>
          </EditorBlog>
        </Editor.Body> */}
      </Editor>
    </>
  )
}

export default Skills;