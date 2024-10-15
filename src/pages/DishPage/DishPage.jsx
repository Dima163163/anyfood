import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDisheById, selectDisheRequestStatus } from '../../redux/dish';
import styles from './DishPage.module.css';
import { useUser } from '../../context/userContext/useUser';
import { DishCounter } from '../../components/DishCounter/DishCounter';
import { useEffect } from 'react';
import { getDish } from '../../redux/dish/getDish';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../../components/Loader/Loader';

export const DishPage = () => {
  console.log(useParams());
  const { dishId } = useParams();
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

  return (
    <main className={styles.dishPage}>
      <h2 className={styles.dishTitle}>{name}</h2>
      <p className={styles.dishIngredients}>
        Ингредиенты: {ingredients.join(', ')}
      </p>
      <p>Цена: ${price} USD</p>
      {user && <DishCounter id={dishId} />}
    </main>
  );
};
