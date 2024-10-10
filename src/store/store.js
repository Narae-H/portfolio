import { configureStore, createSlice } from '@reduxjs/toolkit'

let mainMenu = createSlice({
  name: 'mainMenu',
  initialState: [ {name: 'home'       , tooltip: 'Home'       }
                , {name: 'skills'     , tooltip: 'Skills'     }
                , {name: 'experiences', tooltip: 'Experiences'}
                ],
  reducers: {
  }             
});

// let subMenu = createSlice({
//   name: 'subMenu',
//   initialState: [ {name: 'contactMe', tooltip: 'contact Me'}
//                 , {name: 'settings' , tooltip: 'Settings'  }
//                 ],
//   reducers: {
//   }             
// });

export default configureStore({
  reducer: { 
    mainMenu: mainMenu.reducer,
    // subMenu : subMenu.reducer
  }
}) 