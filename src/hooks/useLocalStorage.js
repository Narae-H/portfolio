import { useCallback, useRef, useSyncExternalStore } from "react";

export function useLocalStorage (key) {
  const valueRef = useRef();

  const setStorage = useCallback( (newValue) => {
    valueRef.current = newValue;
    localStorage.setItem(key, JSON.stringify(newValue));
    dispatchEvent(new StorageEvent('storage', { key: key, newValue }));
  }, [key])

  const removeStorage = useCallback( () => {
    valueRef.current = undefined;
    localStorage.removeItem(key);
    dispatchEvent(new StorageEvent('storage', { key: key }));
  }, [key])

  // Required! Snapshot: Read a snapshot of the data from the store.
  const getSnapshot = useCallback(() => {
    // 1. Get local storage and valueRef to compare
    const localStorageVal = localStorage.getItem(key)? JSON.parse(localStorage.getItem(key)) : "";
    const refVal          = valueRef.current? valueRef.current : ""; 
    
    // 2. Compare the actual values and update valueRef.current only when the values are different to prevent unnecessary re-rendering.
    if( Object.entries(localStorageVal).toString() !== Object.entries(refVal).toString() ) {
      valueRef.current = localStorageVal;
    }
    return valueRef.current;

  }, [key]);

  
  // Required! Subscribe: The subscribe function should subscribe to the store and return a function that unsubscribes.
  const subscribe = useCallback( (listener) => {
    window.addEventListener('storage', listener);
    return () => window.removeEventListener('storage', listener);
  }, []);

  // Sync local storage
  const store = useSyncExternalStore(subscribe, getSnapshot);

  return { store, setStorage, removeStorage };
}