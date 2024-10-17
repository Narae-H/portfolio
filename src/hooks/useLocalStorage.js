import { useCallback, useSyncExternalStore } from "react";

export function useLocalStorage (key) {
  const setStorage = useCallback( (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    dispatchEvent(new StorageEvent('storage', { key: key, newValue }));
  }, [key])

  const removeStorage = useCallback( () => {
    localStorage.removeItem(key);
    dispatchEvent(new StorageEvent('storage', { key: key }));
  }, [key])

  // Required! Snapshot: Read a snapshot of the data from the store.
  // const getSnapshot = () => JSON.parse( localStorage.getItem(key) );
  const getSnapshot = useCallback( () => {
    const value = localStorage.getItem(key);
    try {
      return JSON.parse( value );
    } catch(error) {
      // console.warn(`Failed to parse stored value: ${error.message}`);
      return value;
    }
  }, [])
  
  // Required! Subscribe: The subscribe function should subscribe to the store and return a function that unsubscribes.
  const subscribe = useCallback( (listener) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  // Sync local storage
  const store = useSyncExternalStore(subscribe, getSnapshot);

  return { store, setStorage, removeStorage };
}