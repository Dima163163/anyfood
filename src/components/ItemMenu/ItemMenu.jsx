import { DishCounter } from '../DishCounter/DishCounter';

import styles from './ItemMenu.module.css';

export const ItemMenu = ({ text }) => {
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemText}>
        {text}
      </p> 
      <DishCounter />
    </li>
  );
};
