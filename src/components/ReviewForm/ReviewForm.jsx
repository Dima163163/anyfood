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


  const addRating = (e) => {
    e.preventDefault()
    if (rating < 5) {
      setRating(rating + 1)
    }
  };

  const removeRating = (e) => {
    e.preventDefault()
    if (rating > 1) {
      setRating(rating - 1)
    }
  };

  return (
    <form>
      <div>
        <label>Имя</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Текст отзыва</label>
        <input
          type="text"
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
        onClick={(e) => {
          e.preventDefault();
          setClear();
        }}
      >Clear</button>
    </form>
  )
}
