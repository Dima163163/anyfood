'use client';
import { useUser } from '../../context/userContext/useUser';
import { DishCounter } from '../DishCounter/DishCounter';
import { RouterLink } from '../RouterLink/RouterLink';

import styles from './DishInfo.module.css';

export const DishInfo = ({ dish, dishId }) => {
  const { user } = useUser();
  const { userName } = user;

  return (
    <>
      <RouterLink text='Вернуться' type='btn' to={'/restaurants'} id={dishId} />
      <h2 className={styles.dishTitle}>{dish.name}</h2>
      <p className={styles.dishIngredients}>
        Ингредиенты: {dish.ingredients.join(', ')}
      </p>
      <p>Цена: ${dish.price} USD</p>
      {userName && <DishCounter id={dishId} />}
    </>
  );
};
