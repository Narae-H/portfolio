
import { useLocalStorage } from './useLocalStorage';

export const KEY_VISITED_SKILLS = 'visited_skills';
export const KEY_VISITED_EXPS   = 'visited_exps';

export function useVisitedMenus(localStorageKey) {
  // 1. Get store
  const {store, setStorage, removeStorage} = useLocalStorage(localStorageKey);

  // 2. Add a visited menu
  const setVisitedMenu = (newMenu) => {
    const menuArr = store? [...store] : [];
    let updatedVisitedMenus = menuArr;

    // 2-1) Remove current local storage
    removeStorage();

    // 2-2) Add the visited menu to the local storage
    !menuArr.includes(newMenu) && updatedVisitedMenus.push(newMenu);

    // 2-3) Set storage
    setStorage(updatedVisitedMenus);
  };

  // 3. Remove a visited menu from local storage
  const removeVisitedMenu = (menu) => {
    // 3-1) Remove a menu from the current local storage
    const menuArr = store? [...store] : [];
    let updatedVisitedMenus = menuArr.filter(item => item !== menu);

    console.log( updatedVisitedMenus );

    // 3-2) Delete the current local storage 
    removeStorage();

    // 3-3) Set the updated local storage
    setStorage(updatedVisitedMenus);
  };

  return [store, setVisitedMenu, removeVisitedMenu];
}