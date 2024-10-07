import { ItemMenu } from '../ItemMenu/ItemMenu';

import styles from './RestaurantActiveMenu.module.css';

export const RestaurantActiveMenu = ({ menuIds }) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.resturantMenuList}>
        {menuIds.map((id) => (
          <ItemMenu key={id} type='menu' id={id} />
        ))}
      </ul>
    </>
  );
};
