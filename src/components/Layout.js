import './../styles/Common.css';
import './../styles/Layout.css';

import { Routes, Route } from 'react-router-dom';

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';

import Home from './pages/Home';

import { useSelector } from 'react-redux';
import CapitalizedComponent from '../utils/common';

function Layout() {
  // 1. Menus
  let mainMenu = useSelector( (state) => state.mainMenu );

  return (
    <>
      <div>
        <div id='top-menu-bar'>
          <TopMenuBar/>
        </div>

        <div id='middle-content'>
          <div id='activity-bar'>
            <ActivityBar/>
          </div>
          <div id='editor-area'>
            <Routes>
              {
                mainMenu.map( (item)=>{
                  return (
                    <Route path={`/${item.name}`} element={<CapitalizedComponent type={item.pageName} />}></Route>
                  )
                })
              }
              <Route path='*' element={<Home />}></Route>
            </Routes>

          </div>
        </div>
        
        <div id='bottom-status-bar'>
          <StatusBar/>
        </div>
      </div>
    </>
  )
}

export default Layout;