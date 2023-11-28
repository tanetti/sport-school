import { createContext } from 'react';

export const RequestModalContext = createContext({
  isRequestModalOpened: false,
  setIsRequestModalOpened: () => null,
});
