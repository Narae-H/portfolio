// VScode default dark
export const darkTheme = {
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

  // Status bar
  statusbar: {
    background: '#181818',
    foreground: '#cccccc',
    hoverBackground: '#262626',
    hoverForeground: '#ffffff',
    pointBackground: '#0078d4',
    pointForeground: '#ffffff'
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
    tabBackground   : '#181818',
    background      : '#1e1e1e',
    hoverBackground : '#262626',
    foreground      : '#cccccc'
  },

  // Editor blog
  editorblog: {
    border: '#37373d',
    activeBorder: '#0078d4'
  },

  // Scrollbar
  scrollbar: {
    trackColor: '#cccccc',
    thumbColor: 'rgba(120, 120, 120, 0.1)',
    thumbHoverColor: 'rgba(120, 120, 120, 0.2)',
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

export const lightTheme = {
  // Base colors
  base: {
    background        : '#d6cfe2',
    inactiveTextColor : '#737078',
    activeTextColor   : '#616161',
    // border            : '#f3f3f3',
    border            : '#d6cfe2',
    activeborder      : '#f3f3f3',
    pointColor        : '#006ab1'
  },

  // Activity Bar
  activitybar: {
    background         : '#ededf5',
    foreground         : '#705697', // icon colour
    inactiveForeground : '#bbb0d9', // icon colour when it is inactive
    activeBorder       : '#705697'  // Active indicator border colour
  },

  // Status bar
  statusbar: {
    background: '#705697',
    foreground: '#fbfafc',
    hoverBackground: '#7e69a1',
    hoverForeground: '#ffffff',
    pointBackground: '#4e3c69',
    pointForeground: '#e5e3e9'
  },
  
  // Primary-side-bar: Lists and trees
  list:{
    inactiveSelectionBackground: '#f0f0f7',
    inactiveSelectionForeground: '#61618f',
    hoverBackground            : '#ede8ef',
    hoverForeground            : '#61618f', // text color
    searchAreaBackground       : '#ffffff',
    searchAreaForeground       : '#616161',
    searchAreaActiveBorder     : '#ffffff'
  }, 
  
  // Editor groups & tabs
  editor: {
    tabBackground   : '#ececec',
    background      : '#f5f5f5',
    hoverBackground : '#ede8ef',
    foreground      : '#616161'
  },

  // Editor blog
  editorblog: {
    border: '#d6cfe2',
    activeBorder: '#705697'
  },

  // Scrollbar
   scrollbar: {
    trackColor: '#f5f5f5',
    thumbColor: 'rgba(115, 115, 115, 0.1)',
    thumbHoverColor: 'rgba(115, 115, 115, 0.3)'
  },

  // Tooltip
  tooltip: {
    background: '#f3f3f3',
    foreground: '#616161',
    border: '#cccccc',
  },

  // Dropdown
  dropdown: {
    background: '#f5f5f5',
    foreground: '#616161',
    hover: '#c4d9b1',
  }

}

export const theme = {
  darkTheme,
  lightTheme
}