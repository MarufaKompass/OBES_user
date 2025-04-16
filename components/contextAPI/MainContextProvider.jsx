import React, { createContext, useContext, useState } from 'react';



const storage = JSON.parse(sessionStorage.getItem('token'));


export const dataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(storage); 

  return (
    <dataContext.Provider value={{ user, setUser }}>
      {children}
    </dataContext.Provider>
  );
};


export const useObeContext = () => {
  return useContext(dataContext)
}