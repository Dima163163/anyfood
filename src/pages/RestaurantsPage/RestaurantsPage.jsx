import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';
import { Outlet } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { useGetRestaurantsQuery } from '../../redux/services/api/api';

import styles from './RestaurantsPage.module.css';

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery(undefined);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data?.length) {
    return null;
  }


  return (
    <main className={styles.restaurantsPage}>
        <ResturantsTabsSection>
          <Container>
            <RestaurantsTabsWrapper>
              {data.map(({id, name}) => (
                <RestaurantTab key={id} id={id} name={name} />
              ))}
            </RestaurantsTabsWrapper>
          </Container>
        </ResturantsTabsSection>
      <Outlet />
    </main>
  );
};
