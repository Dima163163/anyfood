import styles from './DishPage.module.css';
import { DishInfo } from '../../components/DishInfo/DishInfo';
import { useParams } from 'react-router-dom';

export const DishPage = () => {
  const { dishId } = useParams();

  return (
    <main className={styles.dishPage}>
      <DishInfo dishId={dishId} />
    </main>
  );
};
