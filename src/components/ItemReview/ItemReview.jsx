import { useDispatch, useSelector } from 'react-redux';
import { selectReviewsById } from '../../redux/reviews';
import { useEffect } from 'react';
import { getReviews } from '../../redux/reviews/getReviews';

export const ItemReview = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);

  const review = useSelector((state) => selectReviewsById(state, id));

  if (!review) {
    return null;
  }

  return <li>{review.text}</li>;
};
