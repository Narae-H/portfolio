import './../styles/ModeButton.css';

import PropTypes from 'prop-types';
import { Icon } from '../assets/customIcon/Icon';
import { useTheme, DARK_THEME, LIGHT_THEME } from '../hooks/useTheme';

export function ModeButton({children, id='', className='', ...props}) {
  // 1. Get the currne theme
  const [ currentThemeName, , setTheme ] = useTheme();

  // 2. Toggle mode
  const handleModeToggle = (e) => {
    setTheme( (currentThemeName === LIGHT_THEME)? DARK_THEME:LIGHT_THEME );
  }

  return (
    <div className={`na-mode-button-wrapper ${currentThemeName === LIGHT_THEME? 'light':'dark'}`}>
      <div className='na-mode-button light'>
        <Icon name='lightmode'/>
      </div>
      <div className='na-mode-button dark'>
        <Icon name='darkmode'/>
      </div>
      <div className='na-mode-button-selected-wrapper' onClick={handleModeToggle}>
        <div className='na-mode-button-selected'>
      </div>
      </div>
    </div>
)
}
ModeButton.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  className: PropTypes.string,
};


