import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';

import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = ({ restaurants, children }) => {

  return (
    <main className={styles.restaurantsPage}>
      <ResturantsTabsSection>
        <Container>
          <RestaurantsTabsWrapper>
            {restaurants.map(({ id, name }) => (
              <RestaurantTab key={id} id={id} name={name} />
            ))}
          </RestaurantsTabsWrapper>
        </Container>
      </ResturantsTabsSection>
      {children}
    </main>
  );
};
