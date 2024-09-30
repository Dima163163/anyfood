import { Container } from '../Container/Container';
import { ItemMenu } from '../ItemMenu/ItemMenu';
import { ItemReview } from '../ItemReview/ItemReview'
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
            <>
              <h3 className={styles.menuTitle}>Меню</h3>
              <ul className={styles.resturantMenuList}>
                {restaurantActive.menu.map((menu) => (
                  <ItemMenu key={menu.id} type='menu' text={menu.name} />
                ))}
              </ul>
            </>
          )}
          {restaurantActive.reviews.length > 0 && (
            <>
              <h3 className={styles.reviesTitle}>Отзывы</h3>
              <ul className={styles.reviewsList}>
                {restaurantActive.reviews.map((review) => (
                  <ItemReview key={review.id} type='review' text={review.text} />
                ))}
              </ul>
            </>
          )}
          <ReviewForm/>
        </div>
      </Container>
    </main>
  );
};
