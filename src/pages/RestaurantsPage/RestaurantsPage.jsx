import { Container } from '../../components/Container/Container';
import { RestaurantsTabsWrapper } from '../../components/RestaurantsTabsWrapper/RestaurantsTabsWrapper';
import { RestaurantTab } from '../../components/RestaurantTab/RestaurantTab';
import { ResturantsTabsSection } from '../../components/ResturantsTabsSection/ResturantsTabsSection';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRestaurantsIds,
  selectRestaurantsRequestStatus
} from '../../redux/restaurants';
import { Outlet } from 'react-router-dom';

import styles from './RestaurantsPage.module.css';
import { useEffect } from 'react';
import { getRestaurants } from '../../redux/restaurants/getRestaurants';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../../components/Loader/Loader';
import { getUsers } from '../../redux/users/getUsers';

export const RestaurantsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useSelector(selectRestaurantsRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

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
