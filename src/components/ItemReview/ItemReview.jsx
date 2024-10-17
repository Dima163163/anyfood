import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRestaurantReview } from '../../redux/reviews/getRestaurantReviews';
import { selectReviewById } from '../../redux/reviews';

export const ItemReview = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantReview(id));
  }, [dispatch, id]);

  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return <li>{review.text}</li>;
};
