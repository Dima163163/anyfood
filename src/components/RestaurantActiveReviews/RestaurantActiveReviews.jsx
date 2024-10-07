import { ItemReview } from '../ItemReview/ItemReview';
import styles from './RestaurantActiveReviews.module.css';

export const RestaurantActiveReviews = ({ reviewsIds }) => {
  return (
    <>
      <h3 className={styles.reviesTitle}>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviewsIds.map((id) => (
          <ItemReview key={id} type='review' id={id} />
        ))}
      </ul>
    </>
  );
};
