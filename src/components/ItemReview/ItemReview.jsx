import { useSelector } from 'react-redux';
import {
  selectReviewById,
  selectReviewsRequestStatus
} from '../../redux/reviews';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../Loader/Loader';

export const ItemReview = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const requestStatus = useSelector(selectReviewsRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  if (!review) {
    return null;
  }

  return <li>{review.text}</li>;
};
