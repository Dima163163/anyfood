import { Counter } from '../Counter/Counter';
import Button from '../Button/Button';
import { useState } from 'react';

import styles from './ReviewFormEdit.module.css';
import { useEditReviewMutation } from '../../redux/services/api/api';

export const ReviewFormEdit = ({ reviewId, reviewItem }) => {
  const {userId, text, rating, userName} = reviewItem;
  const [name, setName] = useState(userName)
  const [textReview, setText] = useState(text)
  const [ratingReview, setRating] = useState(rating);

  const [editReview] = useEditReviewMutation();


  const addRating = () => {
    if (ratingReview < 5) {
      setRating(currentRating => currentRating + 1);
    }
  };

  const removeRating = () => {
    if (ratingReview > 1) {
      setRating((currentRating) => currentRating - 1);
    }
  };

  const clearForm = () => {
    setName('');
    setText('');
    setRating('');
  }

  return (
    <form
      className={styles.reviewForm}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h3 className={styles.formTitle}>Редактировать отзыв</h3>
      <div className={styles.inputWrapper}>
        <label>Имя</label>
        <input
          type='text'
          name='name'
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Текст отзыва</label>
        <input
          type='text'
          name='review'
          defaultValue={textReview}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Рейтинг отзыва</label>
        <Counter
          count={ratingReview}
          increment={addRating}
          decrement={removeRating}
          styleTypeWrapper='default'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
      </div>
      <div className={styles.buttonWrapper}>
        <Button
          onClick={clearForm}
          text='Отчистить'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
        <Button
          onClick={() => {
            editReview({
              reviewId,
              review: {
                userId,
                text: textReview,
                rating: ratingReview
              }
            });
            clearForm;
          }
          }
          text='Отпарвить'
          styleViewVariant='border'
          colorViewVariant='darkBtn'
        />
      </div>
    </form>
  );
};
