import { useState } from 'react';
import { restaurants } from '../../../materials/mock';
import { Layout } from '../Layout/Layout'
import { Restaurant } from '../Restaurant/Restaurant'
import { RestaurantTab } from '../RestaurantTab/RestaurantTab';

import 'normalize.css';
import './App.css';
import { RestaurantsTabsWrapper } from '../RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { Container } from '../Container/Container';
import { ResturantsTabsSection } from '../ResturantsTabsSection/ResturantsTabsSection';

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
      {restaurants.length > 0 && (
        <ResturantsTabsSection>
          <Container>
            <RestaurantsTabsWrapper>
                {restaurants.map(restaurant => (
                  <RestaurantTab
                    key={restaurant.id}
                    title={restaurant.name}
                    changeRestaurant={() => changeRestaurant(restaurant.id)}
                    isActive={restaurant.id === activeRestId}
                  />
                ))}
            </RestaurantsTabsWrapper>
          </Container>
        </ResturantsTabsSection>
      )}
      {restaurantActive && (
        <Restaurant restaurantActive={restaurantActive}/>
      )}
    </Layout>
  )
};