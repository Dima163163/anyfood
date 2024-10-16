import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsById } from '../../redux/reviews';
import { useEffect } from 'react';
import { getRestaurantReviews } from '../../redux/reviews/getRestaurantReviews';

export const ItemReview = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantReviews(id));
  }, [dispatch, id]);

  const review = useSelector((state) => selectReviewsById(state, id));

  if (!review) {
    return null;
  }

  return <li>{review.text}</li>;
};
