'use client';

import { ThemeContextProvider } from './context/themeContext/ThemeContextProvider';
import { UserContextProvider } from './context/userContext/UserContextProvider';

import 'normalize.css';
import './App.css';
import { ReduxProvider } from './redux/ReuduxProvider/ReduxProvider';


const App = ({children}) => {
  return (
    <ReduxProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </ThemeContextProvider>
    </ReduxProvider>
  );
};

export default App;
