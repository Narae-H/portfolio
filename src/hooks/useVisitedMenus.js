
import { useLocalStorage } from './useLocalStorage';

export const KEY_VISITED_SKILLS = 'visited_skills';
export const KEY_VISITED_EXPS   = 'visited_exps';

export function useVisitedMenus(localStorageKey) {
  // 1. Get store
  const {store, setStorage, removeStorage} = useLocalStorage(localStorageKey);
  console.log( `store => ${store}`);

  // 2. Set theme
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

  return [store, setVisitedMenu];
}