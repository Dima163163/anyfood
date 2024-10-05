import { Layout } from '../Layout/Layout'
import { ThemeContextProvider } from '../../context/themeContext/ThemeContextProvider';
import { UserContextProvider } from '../../context/userContext/UserContextProvider';
import { RestaurantPage } from '../../pages/RestaurantPage/RestaurantPage';

import 'normalize.css';
import './App.css';

export const App = () => {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Layout>
          <RestaurantPage/>
        </Layout>
      </ThemeContextProvider>
    </UserContextProvider>
  )
};