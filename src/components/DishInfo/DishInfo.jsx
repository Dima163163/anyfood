import { useUser } from '../../context/userContext/useUser';
import { useGetDishByIdQuery } from '../../redux/services/api/api';
import { DishCounter } from '../DishCounter/DishCounter';
import { Loader } from '../Loader/Loader';
import { RouterLink } from '../RouterLink/RouterLink';

import styles from './DishInfo.module.css';

export const DishInfo = ({ dishId }) => {
  const { user } = useUser();
  const { userName } = user;
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data.name) {
    return null;
  }

  return (
    <>
      <RouterLink text='Вернуться' type='btn' to={'/restaurant'} />
      <h2 className={styles.dishTitle}>{data.name}</h2>
      <p className={styles.dishIngredients}>
        Ингредиенты: {data.ingredients.join(', ')}
      </p>
      <p>Цена: ${data.price} USD</p>
      {userName && <DishCounter id={dishId} />}
    </>
  );
};
