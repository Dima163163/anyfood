'use client';
import { ItemReview } from '../ItemReview/ItemReview';
import styles from './RestaurantReviews.module.css';
import { useUser } from '../../context/userContext/useUser';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const RestaurantReviews = ({reviews, users, restaurantId}) => {
  const { user } = useUser();
  const { userName } = user;


  return (
    <>
      <h3 className={styles.reviesTitle}>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviews.map(({ id, text, userId, rating }) => (
          <ItemReview
            key={id}
            type='review'
            text={text}
            id={id}
            userId={userId}
            rating={rating}
            users={users}
          />
        ))}
      </ul>
      {userName &&  <ReviewForm restaurantId={restaurantId} />}
    </>
  );
};
