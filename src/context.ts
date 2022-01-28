import { createContext } from "react";
import { useMemeStore } from "./hooks/userMemeStore";

export const memeStoreContext = createContext(useMemeStore);
memeStoreContext.displayName = "memeStoreContext";
