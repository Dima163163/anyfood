import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemMenu.module.css';
import { selectDisheById, selectDishesRequestStatus } from '../../redux/dishes';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { getDishes } from '../../redux/dishes/getDishes';
import { IDLE, PENDING } from '../../constants/constants';
import { Loader } from '../Loader/Loader';

export const ItemMenu = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDishes(id));
  }, [dispatch, id]);

  const dishe = useSelector((state) => selectDisheById(state, id));
  const requestStatus = useSelector(selectDishesRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

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
