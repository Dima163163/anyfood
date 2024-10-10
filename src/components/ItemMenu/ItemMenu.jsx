import { useSelector } from 'react-redux';
import styles from './ItemMenu.module.css';
import { selectDisheById } from '../../redux/dishes';
import { NavLink } from 'react-router-dom';

export const ItemMenu = ({ id }) => {
  const dishe = useSelector((state) => selectDisheById(state, id));

  if (!dishe) {
    return null;
  }

  return (
    <li className={styles.listItem}>
      <NavLink to={`/dish/${id}`} className={styles.listItemText}>
        {dishe.name}
      </NavLink>
    </li>
  );
};
