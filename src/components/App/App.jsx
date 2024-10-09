import { Layout } from '../Layout/Layout'
import { ThemeContextProvider } from '../../context/themeContext/ThemeContextProvider';
import { UserContextProvider } from '../../context/userContext/UserContextProvider';
import { RestaurantPage } from '../../pages/RestaurantPage/RestaurantPage';

import 'normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ThemeContextProvider>
          <Layout>
            <RestaurantPage/>
          </Layout>
        </ThemeContextProvider>
      </UserContextProvider>
    </Provider>
  )
};