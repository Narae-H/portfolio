// VScode default dark
export const defaultTheme = {
  // Base colors
  base: {
    background        : '#181818',
    inactiveTextColor : '#969696',
    activeTextColor   : '#919191',
    border            : '#37373d'
  },
  
  // Activity Bar
  activitybar: {
    background         : '#181818',
    foreground         : '#ffffff', // icon colour
    inactiveForeground : '#7b7b7b', // icon colour when it is inactive
    activeBorder       : '#ffffff' // Active indicator border colour
  },

  // Primary-side-bar: Lists and trees
  list:{
    inactiveSelectionBackground: '#252526',
    inactiveSelectionForeground: '#ffffff',
    hoverForeground            : '#ffffff', // text color
    hoverBackground            : '#2D2E2E'
  }, 

  // Editor groups & tabs
  editor: {
    background: '#1e1e1e',
    foreground: '#ffffff'
  }
}

// Tokyo Night theme
export const tokyoNightTheme = {
  // Base colors
  base: {
    background        : '#16161e',
    inactiveTextColor : '#787c99',
    activeTextColor   : '#A9B1D6',
    border            : '#13131a'
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
    hoverBackground            : '#2D2E2E'
  }, 
  
  // Editor groups & tabs
  editor: {
    background: '#1a1b26',
    foreground: '#1a1b26'
  }

}

export const theme = {
  defaultTheme,
  tokyoNightTheme
}