// VScode default dark
export const defaultTheme = {
  // Base colors
  base: {
    background        : '#181818',
    inactiveTextColor : '#969696',
    activeTextColor   : '#cccccc',
    border            : '#37373d',
    activeborder      : '#0078d4',
    pointColor        : '#0078d4;'
  },
  
  // Activity bar
  activitybar: {
    background         : '#181818',
    foreground         : '#cccccc', // icon colour
    inactiveForeground : '#7b7b7b', // icon colour when it is inactive
    activeBorder       : '#0078d4' // Active indicator border colour
  },

  // Primary-side-bar: Lists and trees
  list:{
    inactiveSelectionBackground: '#181818',
    inactiveSelectionForeground: '#cccccc',
    hoverBackground            : '#262626',
    hoverForeground            : '#cccccc', // text color
    searchAreaBackground       : '#313131',
    searchAreaForeground       : '#747474',
    searchAreaActiveBorder     : '#0078d4'
  }, 

  // Editor groups & tabs
  editor: {
    tabBackground: '#181818',
    background   : '#1e1e1e',
    foreground   : '#cccccc'
  },

  // Scrollbar
  scrollbar: {
    trackColor: '#cccccc',
    thumbColor: '#181818',
    thumbHoverColor: 'rgba(248, 248, 248, 0.1)',
  },

  // Tooltip
  tooltip: {
    background: '#1e1e1e',
    foreground: '#cccccc',
    border: '#454545',
  },

  // Dropdown
  dropdown: {
    background: '#181818',
    foreground: '#cccccc',
    hover: '#0078d4',
  }
}

// Tokyo Night theme
export const tokyoNightTheme = {
  // Base colors
  base: {
    background        : '#16161e',
    inactiveTextColor : '#787c99',
    activeTextColor   : '#A9B1D6',
    border            : '#13131a',
    activeborder      : '#0078d4',
    pointColor        : '#13131a'
  },

  // Activity Bar
  activitybar: {
    background         : '#16161e',
    foreground         : '#787c99', // icon colour
    inactiveForeground : '#3b3e52', // icon colour when it is inactive
    activeBorder       : '#787c99'  // Active indicator border colour
  },
  
  // Primary-side-bar: Lists and trees
  list:{
    inactiveSelectionBackground: '#16161e',
    inactiveSelectionForeground: '#787c99',
    hoverForeground            : '#a9b1d6', // text color
    hoverBackground            : '#2D2E2E',
    searchAreaBackground       : '#313131',
    searchAreaForeground       : '#747474',
    searchAreaActiveBorder     : '#0078d4'
  }, 
  
  // Editor groups & tabs
  editor: {
    tabBackground: '#16161e',
    background   : '#1a1b26',
    foreground   : '#c0caf5'
  },

  // Scrollbar
   scrollbar: {
    trackColor: '#37373d',
    thumbColor: '#ffffff'
  },

  // Tooltip
  tooltip: {
    background: '#1e1e1e',
    foreground: '#cccccc',
    border: '#cccccc',
  },

  // Dropdown
  dropdown: {
    background: '#181818',
    foreground: '#cccccc',
    hover: '#0078d4',
  }

}

export const theme = {
  defaultTheme,
  tokyoNightTheme
}