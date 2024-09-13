import { configureStore, createSlice } from '@reduxjs/toolkit'

let mainMenu = createSlice({
  name: 'mainMenu',
  initialState: [ {name: 'home'       , iconName:'VscFiles'}
                , {name: 'skills'     , iconName:'VscCode'}
                , {name: 'experiences', iconName:'VscFolderLibrary'}
                , {name: 'github'     , iconName:'VscGithub'}],
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