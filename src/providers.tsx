import { memeStoreContext } from './context';
import { useMemeStore } from './hooks/useMemeStore';

export const MemeStoreProvider = ({ children }: any) => (
  <memeStoreContext.Provider value={useMemeStore() as any}>
    {children}
  </memeStoreContext.Provider>
);
