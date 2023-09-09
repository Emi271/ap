import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const AppContext = createContext();

// Hook personalizado para acceder al contexto
export function useAppContext() {
  return useContext(AppContext);
}

// Componente principal que proporcionará el contexto
export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]); // Puedes usar esta variable para almacenar datos

  // Puedes definir funciones para actualizar o realizar acciones relacionadas con este contexto

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
