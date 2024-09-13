import './../styles/Layout.css';

import TopMenuBar from './TopMenuBar';
import ActivityBar from './ActivityBar';
import StatusBar from './StatusBar';
import EditorArea from './EditorArea';

function Layout() {

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
            <EditorArea/>
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