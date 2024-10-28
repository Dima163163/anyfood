'use client'
import { useEffect } from 'react';
import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';

import styles from './RestaurantsPage.module.css';
import { useRouter } from 'next/navigation';

export const RestaurantsPage = ({ restaurants, children }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/restaurants/${restaurants[0].id}`)
  })

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
