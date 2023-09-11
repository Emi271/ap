import React, { createContext, useContext, useReducer, useState } from 'react';
import { cartReducer } from './CartReducer'; // Asegúrate de importar tu reducer correctamente

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppProvider = ({ children }) => {
  const initialState = {
    cart: [],
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
