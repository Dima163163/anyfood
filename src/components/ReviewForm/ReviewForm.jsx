import { Counter } from '../Counter/Counter';
import { useForm } from './useForm';

import styles from './ReviewForm.module.css';

export const ReviewForm = () => {
  const {name,
    text,
    rating,
    setName,
    setText,
    setIncrementRating,
    setDecrementRating,
    setClear} = useForm();


  const addRating = () => {
    if (rating < 5) {
      setIncrementRating()
    }
  };

  const removeRating = () => {
    if (rating > 1) {
      setDecrementRating()
    }
  };

  return (
    <form className={styles.reviewForm} onSubmit={(e) => {e.preventDefault()}}>
      <h3 className={styles.formTitle}>Нaписать отзыв</h3>
      <div className={styles.inputWrapper}>
        <label>Имя</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label>Текст отзыва</label>
        <input
          type="text"
          name="review"
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
          styleWrapper={styles.ratingWrapper}
          styleBtn={styles.ratingBtn}
        />
      </div>
      <button
        className={styles.clearBtn}
        onClick={setClear}
      >Clear</button>
    </form>
  )
}
