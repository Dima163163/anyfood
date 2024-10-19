import { useState } from 'react';
import Button from '../Button/Button';

export const ItemReview = ({ id, text, userId, rating, users, setReviewId, setReviewItem }) => {
  const [isActive, setIsActive] = useState(false);
  const user = users.find((user) => user.id === userId);

  return (
    <li>
      <p>
        {user.name}: {text}. Рейтинг: {rating}
      </p>
      {
      !isActive ? <Button
        onClick={() => {
          setReviewId(id);
          setReviewItem({
            id,
            userId,
            text,
            rating,
            userName: user.name,
          })
          setIsActive(true)
        }}
        text='Редактировать'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      /> : <Button
        onClick={() => {
          setReviewId(false);
          setIsActive(false)
        }}
        text='Отменить редактирование'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      />
      }
    </li>
  );
};
