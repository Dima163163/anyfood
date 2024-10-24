'use client'
import styles from './DishPage.module.css';
import { DishInfo } from '../../components/DishInfo/DishInfo';
import { useParams } from 'next/navigation';


export const DishPage = () => {
  const prams = useParams();
  const { dishId } = prams;

  return (
    <main className={styles.dishPage}>
      <DishInfo dishId={dishId} />
    </main>
  );
};
export default DishPage;