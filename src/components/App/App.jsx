import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Main } from '../Main/Main'
import { Tabs } from '../Tabs/Tabs';

export const App = () => {
  const [restaurantId, setRestaurantId] = useState(0);

  const changeRestaurant = (id) => {
    if (restaurantId !== id) {
      setRestaurantId(id)
    }
  };

  return (
    <Layout>
      <Tabs
        restaurants={restaurants}
        changeRestaurant={changeRestaurant}
      />
      <Main restaurant={restaurants[restaurantId]}/>
    </Layout>
  )
};