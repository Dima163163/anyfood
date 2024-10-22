'use client';

import ReduxProvider from './redux-provider';
import ThemeProvider from './theme-provider';
import UserProvider from './user-provider';

export default function Providers({children}) {
  return (
      <ReduxProvider>
        <ThemeProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </ThemeProvider>
      </ReduxProvider>
      
  )
}