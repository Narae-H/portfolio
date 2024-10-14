import './../../styles/pages/Skills.css'

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Editor } from '../Editor';
import { PrimarySideBar } from '../PrimarySideBar';
import { CollapsibleList } from '../CollapsibleList';
import { Icon } from '../../assets/customIcon/Icon';
import { EditorBlog } from '../EditorBlog';
import { transformToLink } from '../../utils/common';

function Skills ( props ) {
  // 1. Get sidebar menu
  const { data: skills, isSuccess: isSuccessSkillMenu } = useQuery(
                                          'menuMain',
                                          () => axios.get('/data/menu/menuMain.json'),
                                          {refetchOnWindowFocus: false,
                                          staleTime: Infinity}
  );

  // 2. Get content
  let {id} = useParams();
  
  const { data: skillObj, isSuccess: isSuccessSkillObj } = useQuery(
                                          ['Skills', id],
                                          () => axios.get(`/data/skills/${id}.json`),
                                          {refetchOnWindowFocus: false,
                                            staleTime: Infinity,
                                            enabled: !!id}
                                          );
    
  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <PrimarySideBar.Title title='Skills'/>
          <PrimarySideBar.SearchArea></PrimarySideBar.SearchArea>
        </PrimarySideBar.Header>

        <PrimarySideBar.Body>
          <CollapsibleList defaultOpenLevels={0}>
          { isSuccessSkillMenu && skills?.data?.menus[1]?.items.map( (menu, index)=> {
            return (
              <CollapsibleList.ListItem title={menu.name} key={index}>
                { menu.items && menu.items.map((item, subIndex) => {
                   return (
                    <CollapsibleList.ListItem title={item.name} icon={<Icon name={item.name}/>} link={`/skills/${transformToLink(item.name)}`} key={`key_${index}_${subIndex}`} />
                   )
                  })
                }
              </CollapsibleList.ListItem>
            )
          })
          }
          </CollapsibleList>
        </PrimarySideBar.Body>

      </PrimarySideBar>
      
      <Editor>
        <Editor.Header>
          <Editor.HeaderTab title='Welcome' icon={<Icon name='skills' />} className='active' />
        </Editor.Header>

        { isSuccessSkillObj?
        (
          <>
            <Editor.Body className='skills-editor-body'>
              <EditorBlog>
                <EditorBlog.Overview>
                  <EditorBlog.OverviewTitle title={skillObj.data.title} icon={<Icon name={skillObj.data.titleIconName} className='skills-icon' />} />
                  <EditorBlog.OverviewContent>
                    <p>{skillObj.data.overviewContent}</p>
                  </EditorBlog.OverviewContent>  
                </EditorBlog.Overview>
                <EditorBlog.Details>
                  <EditorBlog.DetailsNav activeKey='details'>
                    <EditorBlog.DetailsNavItem title='DETAILS' eventKey='details' >
                      <EditorBlog.DetailsBodyHeader title='Related Project'/>
                        {skillObj.data.relatedProject}
                      </EditorBlog.DetailsNavItem>
                  </EditorBlog.DetailsNav>
                </EditorBlog.Details>
              </EditorBlog>
            </Editor.Body>
          </>
        ): (<span>No data</span>)
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