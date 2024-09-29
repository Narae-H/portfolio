import './../styles/Common.css';
import './../styles/Layout.css';

import { Routes, Route } from 'react-router-dom';

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import Home from './pages/Home';

import React from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../utils/common';

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
                  const CapitalizedComponent = React.lazy(() => import(`./pages/${capitalizeFirstLetter(item.name)}`));
                  return (
                    <Route 
                      key={item.name} 
                      path={`/${item.name}`} 
                      element={
                        <React.Suspense fallback={<div>Loading...</div>}>
                          <CapitalizedComponent />
                        </React.Suspense>
                      }
                    />
                  )
                })
              }
              <Route path='*' element={<Home />} />
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