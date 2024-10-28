import { ItemMenu } from '../ItemMenu/ItemMenu';

import styles from './RestaurantMenu.module.css';

export const RestaurantMenu = ({dishes}) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.resturantMenuList}>
        {dishes.map(({ id, name }) => (
          <ItemMenu key={id} type='menu' id={id} name={name} />
        ))}
      </ul>
    </>
  );
};
