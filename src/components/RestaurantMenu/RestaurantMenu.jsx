'use client'
import { ItemMenu } from '../ItemMenu/ItemMenu';

import styles from './RestaurantMenu.module.css';

import { useGetDishesByRestaurantQuery } from '../../redux/services/api/api';
import { Loader } from '../Loader/Loader';
import { useParams } from 'next/navigation';

export const RestaurantMenu = () => {
  const params = useParams();
  const { restaurantId } = params;

  const { data, isLoading, isError } =
    useGetDishesByRestaurantQuery(restaurantId);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data?.length) {
    return null;
  }

  return (
    <>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.resturantMenuList}>
        {data.map(({ id, name }) => (
          <ItemMenu key={id} type='menu' id={id} name={name} />
        ))}
      </ul>
    </>
  );
};
