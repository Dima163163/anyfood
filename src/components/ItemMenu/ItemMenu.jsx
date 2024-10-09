import { useSelector } from 'react-redux';
import { useUser } from '../../context/userContext/useUser';
import { DishCounter } from '../DishCounter/DishCounter';

import styles from './ItemMenu.module.css';
import { selectDisheById } from '../../redux/dishes';

export const ItemMenu = ({ id }) => {
  const dishe = useSelector((state) => selectDisheById(state, id));

  const { user } = useUser();

  if (!dishe) {
    return null;
  }

  return (
    <li className={styles.listItem}>
      <p className={styles.listItemText}>{dishe.name}</p>
      {user && <DishCounter id={id} />}
    </li>
  );
};
