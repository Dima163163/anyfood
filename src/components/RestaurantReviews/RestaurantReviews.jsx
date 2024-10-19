import { useParams } from 'react-router-dom';
import { ItemReview } from '../ItemReview/ItemReview';
import styles from './RestaurantReviews.module.css';
import { useUser } from '../../context/userContext/useUser';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { Loader } from '../Loader/Loader';
import {
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery
} from '../../redux/services/api/api';
import { useState } from 'react';
import { ReviewFormEdit } from '../ReviewFormEdit/ReviewFormEdit';

export const RestaurantReviews = () => {
  const { user } = useUser();
  const { userName } = user;
  const { restaurantId } = useParams();
  const [reviewId, setReviewId] = useState(false);
  const [reviewItem, setReviewItem] = useState(null);
  const { data, isLoading, isError } =
    useGetReviewsByRestaurantIdQuery(restaurantId);

  const {
    data: users,
    isLoading: loading,
    isError: error
  } = useGetUsersQuery();

  if (isLoading || loading) {
    return <Loader />;
  }

  if (isError || error) {
    return <div>Error</div>;
  }

  if (!data?.length || !users?.length) {
    return null;
  }

  return (
    <>
      <h3 className={styles.reviesTitle}>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {data.map(({ id, text, userId, rating }) => (
          <ItemReview
            key={id}
            type='review'
            text={text}
            id={id}
            userId={userId}
            rating={rating}
            users={users}
            setReviewId={setReviewId}
            setReviewItem={setReviewItem}
          />
        ))}
      </ul>
      {userName && !reviewId &&  <ReviewForm restaurantId={restaurantId} />}
      {userName && reviewId && <ReviewFormEdit reviewId={reviewId} reviewItem={reviewItem}/> }
    </>
  );
};
