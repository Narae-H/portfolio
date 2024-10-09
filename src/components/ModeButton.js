import './../styles/ModeButton.css';

import { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage, DARK_THEME, LIGHT_THEME } from '../hooks/localStorage';
import { Icon } from '../assets/customIcon/Icon';



export function ModeButton({children, id='', className='', ...props}) {
  // 1. Controlling dark/light mode state
  // 1-1) Get the currne theme
  const [ currentThemeName, currentThemeObject, setTheme ] = useLocalStorage();

  // 1-2) Initialize variables
  // const [ isLightMode, setIsLightMode ] = useState( currentThemeName === LIGHT_THEME );  // State for managing dark/light mode 
  
  // 2. Toggle mode
  const handleModeToggle = (e) => {
    setTheme( (currentThemeName == LIGHT_THEME)? DARK_THEME:LIGHT_THEME );
    // setTheme(() => {
    //   return (currentThemeName == LIGHT_THEME)? DARK_THEME:LIGHT_THEME ;
    // });
    // setTheme( DARK_THEME );
  }

  return (
    <div className={`na-mode-button-wrapper ${currentThemeName === LIGHT_THEME? 'light':'dark'}`}>
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


