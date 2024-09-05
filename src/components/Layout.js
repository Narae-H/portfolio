import style from './../styles/Layout.css'

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';

function Layout() {

  return (
    <>
      <div id="top-menu-bar">
        <TopMenuBar/>111It's test text.
      </div>
      <div id="activity-bar">
        <ActivityBar/>
      </div>
      <div id="content">
      </div>
      <div id="status-bar">
        <StatusBar/>
      </div>
    </>
  )
}

export default Layout;