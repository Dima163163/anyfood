import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { RestaurantPage } from '../RestaurantPage/RestaurantPage'
import { RestaurantTab } from '../RestaurantTab/RestaurantTab';

export const App = () => {
  const firstId = restaurants[0].id;
  const [activeRestId, setActiveRestId] = useState(firstId);
  const restaurantActive = restaurants.find(restaurant => restaurant.id === activeRestId);

  const changeRestaurant = (id) => {
    if (activeRestId !== id) {
      setActiveRestId(id);
    }
  };

  return (
    <Layout>
      {restaurants.length > 0 && restaurants.map(restaurant => (
        <RestaurantTab
          key={restaurant.id}
          title={restaurant.name}
          changeRestaurant={() => changeRestaurant(restaurant.id)}
          isActive={restaurant.id === activeRestId}
        />
      ))}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
      {restaurantActive && (
        <RestaurantPage restaurantActive={restaurantActive}/>
      )}
    </Layout>
  )
};