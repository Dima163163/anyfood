import { useState } from 'react';
import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/restaurants';
import { normalizedRestaurants } from '../../../materials/normalized-mock';

export const RestaurantPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestId, setActiveRestId] = useState(restaurantsIds[0]);

  const changeRestaurant = (id) => {
    if (activeRestId !== id) {
      setActiveRestId(id);
    }
  };

  return (
    <>
      {normalizedRestaurants.length > 0 && (
        <ResturantsTabsSection>
          <Container>
            <RestaurantsTabsWrapper>
              {normalizedRestaurants.map(({ id }) => (
                <RestaurantTab
                  key={id}
                  id={id}
                  onClick={() => changeRestaurant(id)}
                  isActive={id === activeRestId}
                />
              ))}
            </RestaurantsTabsWrapper>
          </Container>
        </ResturantsTabsSection>
      )}
      <Restaurant key={activeRestId} id={activeRestId} />
    </>
  );
};
