import { useSelector } from 'react-redux';
import { useUser } from '../../context/userContext/useUser';
import { Container } from '../Container/Container';
import { RestaurantActiveMenu } from '../RestaurantActiveMenu/RestaurantActiveMenu';
import { ReviewForm } from '../ReviewForm/ReviewForm';

import styles from './Restaurant.module.css';
import { selectRestaurantById } from '../../redux/restaurants';
import { RestaurantActiveReviews } from '../RestaurantActiveReviews/RestaurantActiveReviews';

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant || {};

  const { user } = useUser();

  if (!name) {
    return null;
  }

  return (
    <main className={styles.restaurant}>
      <Container>
        <div className={styles.restautantWrapper}>
          <h2 className={styles.restaurantTitle}>{name}</h2>
          {menu.length > 0 && <RestaurantActiveMenu menuIds={menu} />}
          {reviews.length > 0 && (
            <RestaurantActiveReviews reviewsIds={reviews} />
          )}
          {user && <ReviewForm />}
        </div>
      </Container>
    </main>
  );
};
