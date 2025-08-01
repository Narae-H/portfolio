import './../../styles/StatusBar.css';

import React from 'react';
import { ModeButton } from '../ModeButton';
import { Icon } from '../../assets/customIcon/Icon';

const BottomStatusBar = React.memo(() => {
  return(
    <>
      <div id='status-wrapper'>
        <div className='left-menu'>
          <p className='menu-icon bg-activity'>
            <Icon name='vscremote'/>
            <span>Narae&apos;s Profile</span>
          </p>
          <a href='https://github.com/Narae-H?tab=repositories' target='_blank' rel='noopener noreferrer' className='menu-icon link' >
              <Icon name='imgithub' />
              <span>GitHub</span>
          </a>
          <a href='https://www.linkedin.com/in/narae-hyeon'target='_blank' rel='noopener noreferrer' className='menu-icon link'>
              <Icon name='imlinkedin' />
              <span>LinkedIn</span>
          </a>
        </div>

        <div className='right-menu'>
          <p className='menu-icon'><span>UTF-8</span></p>
          <ModeButton/>
        </div>
      </div>
    </>
  )
});

export default BottomStatusBar;