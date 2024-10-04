import { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';
import { Restaurant } from '../../components/Restaurant/Restaurant';

import { restaurants } from '../../../materials/mock';

export const RestaurantPage = () => {
  const firstId = restaurants[0].id;
  const [activeRestId, setActiveRestId] = useState(firstId);
  const restaurantActive = restaurants.find(restaurant => restaurant.id === activeRestId);
  const changeRestaurant = (id) => {
    if (activeRestId !== id) {
      setActiveRestId(id);
    }
  };

  return (
    <>
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
    </>
  )
}