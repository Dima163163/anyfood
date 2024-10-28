import { ThemeContextProvider } from './context/themeContext/ThemeContextProvider';
import { UserContextProvider } from './context/userContext/UserContextProvider';

import 'normalize.css';
import './App.css';
import { StoreProvider } from './StoreProvider/StoreProvider';



const App = ({children}) => {
  return (
    <StoreProvider>
      <ThemeContextProvider>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </ThemeContextProvider>
    </StoreProvider>
  );
};

export default App;
