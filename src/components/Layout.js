import './../styles/Common.css';
import './../styles/Layout.css';

import { Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import Home from './pages/Home';
import { transformToLink } from '../utils/common';
import { PageComponent } from './PageComponent';

// Props
export const LayoutContext = React.createContext();

function Layout() {
  // 1. Menus
  const { data: menus, isSuccess } = useQuery(
    'menuMain',
    () => axios.get(`${process.env.PUBLIC_URL}/data/menu/menuMain.json`),
    {refetchOnWindowFocus: false,
      staleTime: Infinity}
    );
    
    // Memoize child components
    const MemoizedTopMenuBar  = React.memo(TopMenuBar);
    const MemoizedActivityBar = React.memo(ActivityBar);
    const MemoizedStatusBar   = React.memo(StatusBar);
    
    return (
    <>
      <div id='root-container'>
        <div id='top-menu-bar'>
          <MemoizedTopMenuBar />
        </div>

        <div id='middle-content'>
          <div id='activity-bar'>
            <MemoizedActivityBar />
          </div>
          <div id='editor-area'>
            <Suspense fallback={<div>Loading...</div>}>
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
                <Route
                  path='contactme'
                  element={<PageComponent name='contactme' />}
                />
                <Route
                  path='skills/:id'
                  element={<PageComponent name='skills' />}
                />
                <Route
                  path='experiences/:id'
                  element={<PageComponent name='experiences' />}
                />
                
                <Route path='*' element={<Home />} />
              </Routes>
            </Suspense>
          </div>
        </div>
        
        <div id='bottom-status-bar'>
          <MemoizedStatusBar />
        </div>
      </div>
    </>
  )
}

export default React.memo(Layout);