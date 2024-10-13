import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectDisheById } from '../../redux/dishes';
import styles from './DishPage.module.css';
import { useUser } from '../../context/userContext/useUser';
import { DishCounter } from '../../components/DishCounter/DishCounter';

export const DishPage = () => {
  const { user } = useUser();
  const { dishId } = useParams();
  const dish = useSelector((state) => selectDisheById(state, dishId));
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
