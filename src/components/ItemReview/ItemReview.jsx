import Button from '../Button/Button';

export const ItemReview = ({ text, userId, rating }) => {
  return (
    <li>
      <p>{userId}: {text}. Рейтинг: {rating}</p>
      <Button
        onClick={() => {}}
        text='Редактировать'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      />
    </li>
  );
};
