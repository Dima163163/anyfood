import { useSelector } from 'react-redux';
import { selectReviewsById } from '../../redux/reviews';

export const ItemReview = ({ id }) => {
  const review = useSelector((state) => selectReviewsById(state, id));

  if (!review) {
    return null;
  }

  return <li>{review.text}</li>;
};
