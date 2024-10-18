import { RouterLink } from '../RouterLink/RouterLink';
import styles from './ItemMenu.module.css';

export const ItemMenu = ({ id, name }) => {
  return (
    <li className={styles.listItem}>
      <RouterLink to={`/dish/${id}`} text={name} />
    </li>
  );
};
