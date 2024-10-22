'use client';

import { Layout } from './components/Layout/Layout';
import { ThemeContextProvider } from './context/themeContext/ThemeContextProvider';
import { UserContextProvider } from './context/userContext/UserContextProvider';
import { RestaurantsPage } from './pages/RestaurantsPage/RestaurantsPage';

import 'normalize.css';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RestaurantPage } from './pages/RestaurantPage/RestaurantPage';
import { RestaurantMenu } from './components/RestaurantMenu/RestaurantMenu';
import { RestaurantReviews } from './components/RestaurantReviews/RestaurantReviews';
import { HomePage } from './pages/HomePage/HomePage';
import { DishPage } from './pages/DishPage/DishPage';

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
                element: <RestaurantMenu />
              },
              {
                path: 'reviews',
                element: <RestaurantReviews />
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

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default App;
