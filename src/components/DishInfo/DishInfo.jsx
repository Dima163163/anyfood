import { useDispatch, useSelector } from 'react-redux';
import { useUser } from '../../context/userContext/useUser';
import { useEffect } from 'react';
import { getDish } from '../../redux/dish/getDish';
import { selectDisheById } from '../../redux/dishes';
import { selectDisheRequestStatus } from '../../redux/dish';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../Loader/Loader';
import styles from './DishInfo.module.css';
import { DishCounter } from '../DishCounter/DishCounter';

export const DishInfo = ({ dishId }) => {
  const dispatch = useDispatch();
  const { user } = useUser();

  useEffect(() => {
    dispatch(getDish(dishId));
  }, [dispatch, dishId]);

  const dish = useSelector((state) => selectDisheById(state, dishId));
  const requestStatus = useSelector(selectDisheRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  const { ingredients, name, price } = dish;

  if (!name) {
    return null;
  }

  return (
    <>
      <h2 className={styles.dishTitle}>{name}</h2>
      <p className={styles.dishIngredients}>
        Ингредиенты: {ingredients.join(', ')}
      </p>
      <p>Цена: ${price} USD</p>
      {user && <DishCounter id={dishId} />}
    </>
  );
};
