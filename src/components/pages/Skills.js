import './../../styles/pages/Skills.css'

import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import { ListGroup } from 'react-bootstrap';

import { transformToLink } from '../../utils/common';

import { PrimarySideBar } from '../PrimarySideBar';
import { CollapsibleList } from '../CollapsibleList';
import { Editor } from '../Editor';
import { EditorBlog } from '../EditorBlog';
import { Icon } from '../../assets/customIcon/Icon';
import { KEY_VISITED_SKILLS, useVisitedMenus } from '../../hooks/useVisitedMenus';

function Skills ( props ) {
  // 1. Get sidebar menu
  const { data: skills, isSuccess: isSuccessSkillMenu } = useQuery(
                                          'menuMain',
                                          () => axios.get(`${process.env.PUBLIC_URL}/data/menu/menuMain.json`),
                                          {refetchOnWindowFocus: false,
                                          staleTime: Infinity}
  );

  // 2. Get content
  let {id} = useParams();
  const { data: skillObj, isSuccess: isSuccessSkillObj } = useQuery(
                                          ['Skills', id],
                                          () => axios.get(`${process.env.PUBLIC_URL}/data/skills/${id}.json`),
                                          {refetchOnWindowFocus: false,
                                            staleTime: Infinity,
                                            enabled: !!id}
                                          );
  
  // 3. Event handlers 
  // 3-1) Save the visited menu info in the local storage
  const [visitedMenus, setVisitedMenu, removeVisitedMenu] = useVisitedMenus(KEY_VISITED_SKILLS);
  const handleLocalStorage = (name) => {
    setVisitedMenu(name);
  }
  
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
                    <CollapsibleList.ListItem title={item.name} icon={<Icon name={item.name}/>} onClick={() => {handleLocalStorage(item.name)}} link={`/skills/${transformToLink(item.name)}`} key={`key_${index}_${subIndex}`}/>
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
          <Editor.HeaderTab title='Welcome' icon={<Icon name='skills' />} link={`/skills`} />
          { visitedMenus? visitedMenus.map ( (menu, index) =>{
            return (
              <Editor.HeaderTab title={menu} icon={<Icon name={menu} />} key={`header_tab_${index}`} link={`/skills/${transformToLink(menu)}`} removeVisitedMenu={removeVisitedMenu}/>
            )
          }) : null
          }
        </Editor.Header>

        { isSuccessSkillObj?
        (
          <>
            <Editor.Body className='skills-editor-body'>
              <EditorBlog>
                <EditorBlog.Overview>
                  <EditorBlog.OverviewTitle title={skillObj.data.title} icon={<Icon name={skillObj.data.titleIconName} className='skills-icon' style={{'width': '35px', 'height': '35px'}}/>} />
                  <EditorBlog.OverviewContent>
                    <p>{skillObj.data.overviewContent}</p>
                  </EditorBlog.OverviewContent>  
                </EditorBlog.Overview>
                <EditorBlog.Details>
                  <EditorBlog.DetailsNav activeKey='details'>
                    <EditorBlog.DetailsNavItem title='DETAILS' eventKey='details' >
                      <EditorBlog.DetailsBodyHeader title='Related Project'/>
                        <ul>
                        {
                          skillObj.data.relatedProject.map( (item, index) => {
                            return(
                              <>
                                  <li key={index}>
                                    <Link to={item.projectLink} className='na-rel-project-link'>{item.projectName}</Link>
                                  </li>
                              </>
                            )
                          })
                        }
                        </ul>
                      </EditorBlog.DetailsNavItem>
                  </EditorBlog.DetailsNav>
                </EditorBlog.Details>
              </EditorBlog>
            </Editor.Body>
          </>
        ): null
        }

        <Editor.Body className={`skills-editor-body welcome row ${!skillObj? 'active':''}`}>
        { !skillObj && isSuccessSkillMenu && skills?.data?.menus[1]?.items.map( (menu, index)  =>{
          return (
            <div className='col-lg-6 col-md-12' key={index}>
              <Editor.SubSubTitle>{menu.name}</Editor.SubSubTitle>
              <ListGroup variant="flush">
                { menu.items && menu.items.map((item, subIndex) => {
                  return (
                    <ListGroup.Item className='na-list-group-item' key={`${index}_${subIndex}`}>
                      <Link to={transformToLink(`/skills/${item.name}`)} onClick={() => {handleLocalStorage(item.name)}}>
                        <Icon name={item.name}/> <span>{item.name}</span>
                      </Link>
                    </ListGroup.Item>
                  )
                }) }
              </ListGroup>
            </div>
          )
        } )}
        </Editor.Body>
      </Editor>
    </>
  )
}

export default Skills;