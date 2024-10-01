import { ItemMenu } from '../ItemMenu/ItemMenu';

import styles from './RestaurantActiveMenu.module.css';

export const RestaurantActiveMenu = ({restaurantActive}) => {
  return (
    <>
      <h3 className={styles.menuTitle}>Меню</h3>
      <ul className={styles.resturantMenuList}>
        {restaurantActive.menu.map((menu) => (
          <ItemMenu key={menu.id} type='menu' text={menu.name} />
        ))}
      </ul>
    </>
  )
};