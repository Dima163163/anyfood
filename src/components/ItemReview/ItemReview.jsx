import Button from '../Button/Button';

export const ItemReview = ({ text, userId, rating, users }) => {
  const user = users.find((user) => user.id === userId);

  return (
    <li>
      <p>
        {user.name}: {text}. Рейтинг: {rating}
      </p>
      <Button
        onClick={() => {}}
        text='Редактировать'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      />
    </li>
  );
};
