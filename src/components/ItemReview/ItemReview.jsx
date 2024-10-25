'use client';
import { useState } from 'react';
import Button from '../Button/Button';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { useUser } from '../../context/userContext/useUser';

export const ItemReview = ({ id, text, userId, rating, users }) => {
  const {user: auth} = useUser();
  const {userName} = auth;
  const [isEdit, setIsEdit] = useState(false);
  const user = users.find((user) => user.id === userId);
  const reviewItem = {
    id,
    userId,
    text,
    rating,
    userName: user ? user.name : userName,
  }
  

  return (
    <li>
      <p>
        {user ? user.name : userName}: {text}. Рейтинг: {rating}
      </p>
      {
      !isEdit ? <Button
        onClick={() => {
          setIsEdit(true)
        }}
        text='Редактировать'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      /> : <Button
        onClick={() => {
          setIsEdit(false)
        }}
        text='Отменить редактирование'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      />
      }
      {isEdit && <ReviewForm reviewId={id} isEdit={isEdit} reviewItem={reviewItem} />}
    </li>
  );
};
