import { useCallback, useState } from 'react'
import { UserContext } from './UserContext';

export const UserContextProvider = ({children}) => {
  const [user, setUser] = useState(null);

  const loginUser = useCallback(() => {
    setUser((currentUser) => {
      if (!currentUser) {
        return 'Дима';
      } else {
        return null;
      }
    })
  }, [])

  return (
    <UserContext.Provider value={{user, loginUser}}>
      {children}
    </UserContext.Provider>
  )
}