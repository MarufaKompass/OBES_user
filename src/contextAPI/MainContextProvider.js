import React, { createContext, useContext, useState } from 'react';

export const dataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  return (
    <dataContext.Provider value={{ user, setUser }}>
      {children}
    </dataContext.Provider>
  );
};


export const useObeContext = () => {
  return useContext(dataContext)
}