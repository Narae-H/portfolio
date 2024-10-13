import './../styles/Common.css';
import './../styles/Layout.css';

import { Routes, Route } from 'react-router-dom';

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import Home from './pages/Home';

import React from 'react';
import { transformToLink } from '../utils/common';
import { useQuery } from 'react-query';
import axios from 'axios';
import { PageComponent } from './PageComponent';

export const LayoutContext = React.createContext();

function Layout() {
  // 1. Menus
  const { data: menus, isSuccess } = useQuery(
                                      'menuMain',
                                      () => axios.get('/data/menu/menuMain.json'),
                                      {refetchOnWindowFocus: false,
                                      staleTime: Infinity}
                                    );

  return (
    <>
      <div id='root-container'>
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
                isSuccess && menus.data.menus.map( (item)=>{
                  return (
                    <Route 
                      key={item.name} 
                      path={`/${transformToLink(item.name)}`}
                      element={
                        <PageComponent name={item.name} />
                      }
                    />
                  )
                })
              }

              <Route path='skills/:id' element={
                <LayoutContext.Provider value='java'>
                  <PageComponent name='skills' />
                </LayoutContext.Provider>
              } />

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