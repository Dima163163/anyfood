import { Container } from '../Container/Container';
import { RestaurantActiveMenu } from '../RestaurantActiveMenu/RestaurantActiveMenu';
import { RestaurantActiveReviews } from '../RestaurantActiveReviews/RestaurantActiveReviews';
import { ReviewForm } from '../ReviewForm/ReviewForm';

import styles from './Restaurant.module.css';

export const Restaurant = ({ restaurantActive }) => {
  if (!restaurantActive.name) {
    return null;
  }

  return (
    <main className={styles.restaurant}>
      <Container>
        <div className={styles.restautantWrapper}>
          <h2 className={styles.restaurantTitle}>{restaurantActive.name}</h2>
          {restaurantActive.menu.length > 0 && (
            <RestaurantActiveMenu restaurantActive={restaurantActive} />
          )}
          {restaurantActive.reviews.length > 0 && (
            <RestaurantActiveReviews
              restaurantActive={restaurantActive}
            />
          )}
          <ReviewForm/>
        </div>
      </Container>
    </main>
  );
};
