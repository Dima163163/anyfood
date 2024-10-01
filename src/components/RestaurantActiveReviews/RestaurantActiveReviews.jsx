
import { ItemReview } from '../ItemReview/ItemReview';
import styles from './RestaurantActiveReviews.module.css';

export const RestaurantActiveReviews = ({restaurantActive}) => {
  return (
    <>
      <h3 className={styles.reviesTitle}>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {restaurantActive.reviews.map((review) => (
          <ItemReview key={review.id} type='review' text={review.text} />
        ))}
      </ul>
    </>
  )
};