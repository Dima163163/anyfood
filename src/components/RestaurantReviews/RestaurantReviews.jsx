import { useParams } from 'react-router-dom';
import { ItemReview } from '../ItemReview/ItemReview';
import styles from './RestaurantReviews.module.css';
import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/restaurants';
import { useUser } from '../../context/userContext/useUser';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const RestaurantReviews = () => {
  const { user } = useUser();
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <h3 className={styles.reviesTitle}>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {restaurant.reviews.map((id) => (
          <ItemReview key={id} type='review' id={id} />
        ))}
      </ul>
      {user && <ReviewForm />}
    </>
  );
};
