import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Restaurant } from '../Restaurant/Restaurant'
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const App = () => {
  const firstId = restaurants[0].id;
  const [restaurantId, setRestaurantId] = useState(firstId);
  const [currentRestaurant, setCurrentRestaurant] = useState(restaurants[0])

  const changeRestaurant = (id) => {
    if (restaurantId !== id) {
      setRestaurantId(id);
      const restaurant = restaurants.find(restaurant => restaurant.id === id);
      setCurrentRestaurant(restaurant);
    }
  };

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        changeRestaurant={changeRestaurant}
      />
      <Restaurant restaurant={currentRestaurant}/>
    </Layout>
  )
};