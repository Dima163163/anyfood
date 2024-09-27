import { Counter } from '../Counter/Counter';
import { useForm } from './useForm'

export const ReviewForm = () => {
  const {name,
    text,
    rating,
    setName,
    setText,
    setRating,
    setClear} = useForm();


  const addRating = () => {
    if (rating < 5) {
      setRating(rating + 1)
    }
  };

  const removeRating = () => {
    if (rating > 1) {
      setRating(rating - 1)
    }
  };

  return (
    <form onSubmit={(e) => {e.preventDefault()}}>
      <div>
        <label>Имя</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Текст отзыва</label>
        <input
          type="text"
          name="review"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <label>Рейтинг отзыва</label>
        <Counter
          count={rating}
          increment={addRating}
          decrement={removeRating}
        />
      </div>
      <button
        onClick={setClear}
      >Clear</button>
    </form>
  )
}
