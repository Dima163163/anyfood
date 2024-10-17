import { useSelector } from 'react-redux';
import { ItemMenu } from '../ItemMenu/ItemMenu';

import styles from './RestaurantMenu.module.css';

import { useParams } from 'react-router-dom';
import { selectRestaurantById } from '../../redux/restaurants';

export const RestaurantMenu = () => {
  const { restaurantId } = useParams();
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.resturantMenuList}>
        {restaurant.menu.map((id) => (
          <ItemMenu key={id} type='menu' id={id} />
        ))}
      </ul>
    </>
  );
};
