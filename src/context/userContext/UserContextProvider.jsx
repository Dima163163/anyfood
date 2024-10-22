'use client';
import { useCallback, useState } from 'react';
import { UserContext } from './UserContext';

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({ isAuthorized: false });

  const loginUser = useCallback(() => {
    setUser((prevUser) => {
      return prevUser.isAuthorized
        ? { isAuthorized: false }
        : {
            isAuthorized: true,
            userName: 'Dima',
            userId: 'dfb456e9-b432-4b8d-aec6-7f6ff2e6af88'
          };
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
