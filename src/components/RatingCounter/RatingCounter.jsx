import { Counter } from '../Counter/Counter';
import { useForm } from '../ReviewForm/useForm';

export const RatingCounter = () => {
    const {rating, setRating} = useForm();
  const addRating = () => {
    if (rating <= 5) {
      setRating(rating + 1)
    }
  };

  const removeRating = () => {
    if (rating > 0) {
      setRating(rating - 1)
    }
  };
  return (
    <Counter
      count={rating}
      increment={addRating}
      decrement={removeRating}
    />
  )
};