
import { useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const KEY_VISITED_SKILLS = 'visited_skills';
export const KEY_VISITED_EXPS   = 'visited_exps';

export function useVisitedMenus(localStorageKey) {
  // 1. Get store
  const {store, setStorage} = useLocalStorage(localStorageKey);
  console.log( `store => ${store}`);

  // 2. Set theme
  // const setVisitedMenu = useCallback( (newMenu) => {
  //   localStorage.setItem(key, JSON.stringify(newValue));
  //   dispatchEvent(new StorageEvent('storage', { key: key, newValue }));
  // }, [key])

  const setVisitedMenu = (newMenu) => {
    // setStorage([...visitedMenus, newMenu]);
    console.log(store);
    console.log('setVisitedMenu called.: ' + newMenu);

    setStorage([newMenu]);
  };
  // const setVisitedMenu = useEffect((newMenu) => {
  //   // setStorage([...visitedMenus, newMenu]);
  //   console.log('setVisitedMenu called.: ' + newMenu);
  // }, [localStorageKey]);

  return [store, setVisitedMenu];
}