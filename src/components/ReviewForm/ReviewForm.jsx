import { Counter } from '../Counter/Counter';
import { useForm } from './useForm';

import styles from './ReviewForm.module.css';
import Button from '../Button/Button';
import {
  useAddReviewMutation,
  useEditReviewMutation
} from '../../redux/services/api/api';
import { useContext} from 'react';
import { UserContext } from '../../context/userContext/UserContext';

export const ReviewForm = ({
  restaurantId = '',
  isEdit = false,
  reviewId,
  reviewItem = {}
}) => {
  const {
    name,
    text,
    rating,
    setName,
    setText,
    setIncrementRating,
    setDecrementRating,
    setClear
  } = useForm({
    userName: reviewItem?.userName,
    reviewText: reviewItem?.text,
    reviewRating: reviewItem?.rating
  });
  const { user } = useContext(UserContext);
  const { userId } = user;

  const [addReview] = useAddReviewMutation();
  const [editReview] = useEditReviewMutation();

  const addRating = () => {
    if (rating < 5) {
      setIncrementRating();
    }
  };

  const removeRating = () => {
    if (rating > 1) {
      setDecrementRating();
    }
  };

  const onSubmit = () => {
    if (isEdit) {
      editReview({
        reviewId,
        review: {
          userId,
          text,
          rating
        }
      });
    } else {
      addReview({
        restaurantId,
        review: {
          userId,
          text,
          rating
        }
      });
    }
  };

  return (
    <form
      className={styles.reviewForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h3 className={styles.formTitle}>
        {isEdit ? 'Редактировать' : 'Нaписать отзыв'}
      </h3>
      <div className={styles.inputWrapper}>
        <label>Имя</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Текст отзыва</label>
        <input
          type='text'
          name='review'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Рейтинг отзыва</label>
        <Counter
          count={rating}
          increment={addRating}
          decrement={removeRating}
          styleTypeWrapper='default'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={setClear}
          text='Отчистить'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
        <Button
          onClick={onSubmit}
          text='Отпарвить'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
      </div>
    </form>
  );
};
