import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Restaurant } from '../Restaurant/Restaurant'
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const App = () => {
  const firstId = restaurants[0].id;
  const [restaurantActiveId, setRestaurantActiveId] = useState(firstId);
  let restaurant = restaurants.find(restaurant => restaurant.id === restaurantActiveId);

  const changeRestaurant = (id) => {
    if (restaurantActiveId !== id) {
      setRestaurantActiveId(id);
      restaurant = restaurants.find(restaurant => restaurant.id === id);
    }
  };

  return (
    <Layout>
      <RestaurantTabs
        restaurants={restaurants}
        changeRestaurant={changeRestaurant}
      />
      <Restaurant restaurant={restaurant}/>
    </Layout>
  )
};