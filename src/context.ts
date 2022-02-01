import { createContext } from 'react';
import { useMemeStore } from './hooks/useMemeStore';

export const memeStoreContext = createContext(useMemeStore);
memeStoreContext.displayName = 'memeStoreContext';
