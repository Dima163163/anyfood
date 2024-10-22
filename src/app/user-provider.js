'use client';

import { UserContextProvider } from '../context/userContext/UserContextProvider';

export default function UserProvider({children}) {
  return (
    <UserContextProvider>
      {children}
    </UserContextProvider>
  )
}