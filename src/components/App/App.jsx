import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Restaurant } from '../Restaurant/Restaurant'
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const App = () => {
  const [restaurantId, setRestaurantId] = useState(0);

  const changeRestaurant = (id) => {
    if (restaurantId !== id) {
      setRestaurantId(id)
    }
  };

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        changeRestaurant={changeRestaurant}
      />
      <Restaurant restaurant={restaurants[restaurantId]}/>
    </Layout>
  )
};