import { Layout } from '../Layout/Layout';
import { ThemeContextProvider } from '../../context/themeContext/ThemeContextProvider';
import { UserContextProvider } from '../../context/userContext/UserContextProvider';
import { RestaurantsPage } from '../../pages/RestaurantsPage/RestaurantsPage';

import 'normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RestaurantPage } from '../../pages/RestaurantPage/RestaurantPage';
import { RestaurantActiveMenu } from '../RestaurantActiveMenu/RestaurantActiveMenu';
import { RestaurantActiveReviews } from '../RestaurantActiveReviews/RestaurantActiveReviews';
import { HomePage } from '../../pages/HomePage/HomePage';
import { DishPage } from '../../pages/DishPage/DishPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'restaurant',
        element: <RestaurantsPage />,
        children: [
          {
            path: ':restaurantId',
            element: <RestaurantPage />,
            children: [
              {
                path: 'menu',
                element: <RestaurantActiveMenu />
              },
              {
                path: 'reviews',
                element: <RestaurantActiveReviews />
              }
            ]
          }
        ]
      },
      {
        path: '/dish/:dishId',
        element: <DishPage />
      },
      {
        path: 'homepage',
        element: <HomePage />
      },
      {
        path: 'about',
        element: <div>About</div>
      }
    ]
  }
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router}>
            <Layout>
              <RestaurantsPage />
            </Layout>
          </RouterProvider>
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};
