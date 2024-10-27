import './../styles/TopMenuBar.css';

import React, { memo, useMemo } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import { VscChromeClose, VscChromeMinimize, VscChromeRestore, VscMail } from "react-icons/vsc";
import { Icon } from '../assets/customIcon/Icon';
import { Dropdown } from './Dropdown';
import useWindowSize from '../hooks/useWindowSize';
import { transformToLink } from '../utils/common';
import { KEY_VISITED_EXPS, KEY_VISITED_SKILLS, useVisitedMenus } from '../hooks/useVisitedMenus';

const TopMenuBar = memo(() => {
  // 1. Get menus depending on window size
  const { isMobile } = useWindowSize();

  const { url, queryKey } = useMemo(() => {
    const url = isMobile? 
      `${process.env.PUBLIC_URL}/data/menu/menuMain.json` 
      : `${process.env.PUBLIC_URL}/data/menu/menuTop.json`;

    const queryKey = isMobile ? 'menuMain' : 'menuTop';
    return { url, queryKey };
  }, [isMobile]);

  const { data: menus, isSuccess } = useQuery({
                                                queryKey,
                                                queryFn: () => axios.get(url),
                                                refetchOnWindowFocus: false,
                                                staleTime: Infinity
                                              });

  // 2. Render menu items
  const renderMenuItem = (parentName, item, indices) => {
    const key = indices.join('_');

    return (
      <Dropdown.Item 
        key={`key_${key}`} 
        index={indices[indices.length - 1]} 
        title={item.name} 
        eventKey={item.name} 
        link={transformToLink(`${parentName}/${item.name}`)} 
        onClick={(e) => {
          handleLocalStorage(parentName, item.name)
        }}
      >
        {item.items && item.items.map((subItem, index) => 
          renderMenuItem(parentName, subItem, [...indices, index])
        )}
      </Dropdown.Item>
    )
  }

  // 3. Event handlers 
  // 3-1) Save the visited menu info in the local storage
  const [, setVisitedSkillMenu ] = useVisitedMenus(KEY_VISITED_SKILLS);
  const [, setVisitedExpMenu ] = useVisitedMenus(KEY_VISITED_EXPS);
  const handleLocalStorage = (mainManu, name) => {
    if( mainManu === 'Skills') {
      setVisitedSkillMenu(name);
    } else if ( mainManu === 'Experiences'){
      setVisitedExpMenu(name);
    }
  }
  
  return(
    <>
      <div id='top-menu-wrapper'>
        <div className='left-menu'>
          <div className='menu-main-img'>
            <Link to='/'> {<Icon name='vscodec'/>} </Link>
          </div>
          { isSuccess && menus.data.menus.map((menu, index) => {
            return (
              <Dropdown key={index} index={index} title={menu.name} className='menu-icon' link={isMobile? transformToLink(menu.name): null}>
                {  menu.items && menu.items.map((item, subIndex) => {
                  return (
                    renderMenuItem(menu.name, item, [index, subIndex])
                  )
                }) }
              </Dropdown>
            )
            })
          }
        </div>

        <div className='right-menu'>
          <div className='menu-img bp-lg'> <VscChromeMinimize /> </div>
          <div className='menu-img bp-lg'> <VscChromeRestore /> </div>
          <div className='menu-img bp-lg close'> <VscChromeClose /> </div>
          <Link to='/contactme' className='menu-img bp-md'><VscMail /></Link>
        </div>
      </div>
    </>
  )
});

export default TopMenuBar;