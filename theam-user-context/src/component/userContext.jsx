import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLogged, setLogged] = useState(false);
  const [authuser, setAuthuser] = useState(null);

  const login = () => {
    setLogged(true);
    setAuthuser({ name: 'saroj choudhary' });
  };

  const logout = () => {
    setLogged(false);
    setAuthuser(null);
  };

  return (
    <UserContext.Provider value={{ isLogged, login, logout, authuser }}>
      {children}
    </UserContext.Provider>
  );
}

