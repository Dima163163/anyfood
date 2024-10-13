import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';
import { useSelector } from 'react-redux';
import { selectRestaurantsIds } from '../../redux/restaurants';
import { Outlet } from 'react-router-dom';

import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <main className={styles.restaurantsPage}>
      {restaurantsIds.length > 0 && (
        <ResturantsTabsSection>
          <Container>
            <RestaurantsTabsWrapper>
              {restaurantsIds.map((id) => (
                <RestaurantTab key={id} id={id} />
              ))}
            </RestaurantsTabsWrapper>
          </Container>
        </ResturantsTabsSection>
      )}
      <Outlet />
    </main>
  );
};
