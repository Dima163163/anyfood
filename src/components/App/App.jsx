import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Restaurant } from '../Restaurant/Restaurant'
import { RestaurantTabs } from '../RestaurantTabs/RestaurantTabs';

export const App = () => {
  const firstId = restaurants[0].id;
  const [activeRestId, setActiveRestId] = useState(firstId);
  const restaurant = restaurants.find(restaurant => restaurant.id === activeRestId);

  const changeRestaurant = (id) => {
    if (activeRestId !== id) {
      setActiveRestId(id);
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