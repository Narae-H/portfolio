import { configureStore, createSlice } from '@reduxjs/toolkit'

let mainMenu = createSlice({
  name: 'mainMenu',
  initialState: [ {name: 'home'       , pageName: 'Home'       , iconName:'VscFiles'}
                , {name: 'skills'     , pageName: 'Skills'     , iconName:'VscCode'}
                , {name: 'experiences', pageName: 'Experiences', iconName:'VscFolderLibrary'}
                , {name: 'github'     , pageName: '', iconName:'VscGithub'}],
  reducers: {
  }             
});

let subMenu = createSlice({
  name: 'subMenu',
  initialState: [ {name: 'contactMe', iconName:'VscMail'}
                , {name: 'settings' , iconName:'VscSettingsGear'}
                ],
  reducers: {
  }             
});

export default configureStore({
  reducer: { 
    mainMenu: mainMenu.reducer,
    subMenu : subMenu.reducer  
  }
}) 