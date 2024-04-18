import React from 'react';
import { UserContext } from './userContext';

import { useContext } from 'react';
function UserAuth() {
  const { isLogged, login, logout, authuser } = useContext(UserContext);

  return (
    <>
      <span>User is Currently {isLogged ? 'Log In' : 'Logged Out'}</span>
      {isLogged ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}
      {isLogged && <span>User Name: {authuser.name}</span>}
    </>
  );
}

export { UserAuth};
