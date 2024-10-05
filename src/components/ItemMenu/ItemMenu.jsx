import { useUser } from '../../context/userContext/useUser';
import { DishCounter } from '../DishCounter/DishCounter';

import styles from './ItemMenu.module.css';

export const ItemMenu = ({ text }) => {
  const {user} = useUser();
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemText}>
        {text}
      </p> 
      {user && <DishCounter />}
    </li>
  );
};
