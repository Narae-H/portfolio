import './../../styles/pages/Experiences.css';

import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

import { ListGroup } from 'react-bootstrap';
import { CollapsibleList } from "../CollapsibleList";
import { Editor } from "../Editor";
import { PrimarySideBar } from "../PrimarySideBar";
import { Icon } from '../../assets/customIcon/Icon';
import { transformToLink } from '../../utils/common';
import { KEY_VISITED_EXPS, useVisitedMenus } from '../../hooks/useVisitedMenus';
import { EditorBlog } from '../EditorBlog';

function Experiences () {
  // 1. Get sidebar menu
  const { data: exps, isSuccess: isSuccessExpMenu } = useQuery(
                                          'menuMain',
                                          () => axios.get(`${process.env.PUBLIC_URL}/data/menu/menuMain.json`),
                                          {refetchOnWindowFocus: false,
                                          staleTime: Infinity}
  );

  // 2. Get content
  let {id} = useParams();
  const { data: expObj, isSuccess: isSuccessExpObj } = useQuery(
                                          ['exps', id],
                                          () => axios.get(`${process.env.PUBLIC_URL}/data/experiences/${id}.json`),
                                          {refetchOnWindowFocus: false,
                                            staleTime: Infinity,
                                            enabled: !!id}
                                          );
  console.log('expObj', expObj);

  // 3. Event handlers 
  // 3-1) Save the visited menu info in the local storage
  const [visitedMenus, setVisitedMenu, removeVisitedMenu] = useVisitedMenus(KEY_VISITED_EXPS);
  const handleLocalStorage = (name) => {
    setVisitedMenu(name);
  }                  

  return (
    <>
      <PrimarySideBar>
        <PrimarySideBar.Header>
          <PrimarySideBar.Title title='Experiences'/>
        </PrimarySideBar.Header>

        <PrimarySideBar.Body>
          <CollapsibleList defaultOpenLevels={0}>
          { isSuccessExpMenu && exps?.data?.menus[2]?.items.map( (menu, index)=> {
            return (
              <CollapsibleList.ListItem title={menu.name} key={index}>
                { menu.items && menu.items.map((item, subIndex) => {
                   return (
                    <CollapsibleList.ListItem title={item.name} icon={<Icon name={item.name}/>} onClick={() => {handleLocalStorage(item.name)}} link={`/experiences/${transformToLink(item.name)}`} key={`key_${index}_${subIndex}`}/>
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
          <Editor.HeaderTab title='Welcome' icon={<Icon name='experiences' />} link={`/experiences`} />
          { visitedMenus? visitedMenus.map ( (menu, index) =>{
            return (
              <Editor.HeaderTab title={menu} icon={<Icon name={menu} />} key={index} link={`/experiences/${transformToLink(menu)}`} removeVisitedMenu={removeVisitedMenu}/>
            )
          }) : null
          }
        </Editor.Header>

        { isSuccessExpObj?
        (
          <>
            <Editor.Body className='exps-editor-body'>
              <EditorBlog>
                <EditorBlog.Overview>
                  <EditorBlog.OverviewTitle title={expObj.data.title} icon={<Icon name={expObj.data.titleIconName} className='exps-icon' />} />
                  <EditorBlog.OverviewContent>
                    <p>{expObj.data.overviewContent}</p>
                  </EditorBlog.OverviewContent>  
                </EditorBlog.Overview>
                <EditorBlog.Details>
                  <EditorBlog.DetailsNav activeKey='details'>
                    <EditorBlog.DetailsNavItem title='DETAILS' eventKey='details' >
                      <EditorBlog.DetailsBodyHeader title='Related Project'/>
                      </EditorBlog.DetailsNavItem>
                  </EditorBlog.DetailsNav>
                </EditorBlog.Details>
              </EditorBlog>
            </Editor.Body>
          </>
        ): null
        }

        <Editor.Body className={`exps-editor-body welcome row ${!expObj? 'active':''}`}>
          { !expObj && isSuccessExpMenu && exps?.data?.menus[2]?.items.map( (menu, index)  =>{
            return (
              <div className='col-lg-6 col-md-12' key={index}>
                <Editor.SubSubTitle>{menu.name}</Editor.SubSubTitle>
                <ListGroup variant="flush">
                  { menu.items && menu.items.map((item, subIndex) => {
                    return (
                      <ListGroup.Item className='na-list-group-item' key={`${index}_${subIndex}`}>
                        <Link to={transformToLink(`/experiences/${item.name}`)}>
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

export default Experiences;