import './../styles/ModeButton.css';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../assets/customIcon/Icon';


export function ModeButton({children, id='', className='', ...props}) {
  // 1. Controlling dark/night mode state
  // 1-1) Initialize variables
  const [ isLightMode, setIsLightMode ] = useState(true);  // State for managing dark/night mode 
  // const dropdownRef                   = useRef(null); // Ref for dropdown element (used for click outside detection)
  
  // 2. Toggle mode
  // 2-1) Toggle mode
  const handleModeToggle = (e) => {
    setIsLightMode(!isLightMode);
  }

  // 2-2) Save the mode in the local storage


  return (
    <div className={`na-mode-button-wrapper ${isLightMode? 'light':'dark'}`}>
      <div className='na-mode-button light'>
        <Icon name='lightmode'/>
      </div>
      <div className='na-mode-button dark'>
        <Icon name='darkmode'/>
      </div>
      <div className='na-mode-button-selected' onClick={handleModeToggle}>
      </div>
    </div>
)
}
ModeButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};


