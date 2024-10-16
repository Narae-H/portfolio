import './../styles/TopMenuBar.css';

import { VscChromeClose, VscChromeMinimize, VscChromeRestore, VscMail } from "react-icons/vsc";
import { Dropdown } from './Dropdown';
import axios from 'axios';
import { useQuery } from 'react-query';
import useWindowSize from '../hooks/useWindowSize';
import { Icon } from '../assets/customIcon/Icon';
import { Link } from 'react-router-dom';
import { transformToLink } from '../utils/common';

function TopMenuBar(){
  // 1. Get menus depending on window size
  const { isMobile } = useWindowSize();
  const url = isMobile? '/data/menu/menuMain.json' : '/data/menu/menuTop.json';
  const queryKey = isMobile? 'menuMain': 'menuTop';

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
      <Dropdown.Item key={`key_${key}`} index={indices[indices.length - 1]} title={item.name} eventKey={item.name} link={transformToLink(`${parentName}/${item.name}`)}>
        {item.items && item.items.map((subItem, index) => 
          renderMenuItem(parentName, subItem, [...indices, index])
        )}
      </Dropdown.Item>
    )
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
              <Dropdown key={index} index={index} title={menu.name} className='menu-icon' link={transformToLink(menu.name)}>
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
          <a href='#contactme' className='menu-img bp-md'><VscMail /></a>
        </div>
      </div>
    </>
  )
}

export default TopMenuBar;