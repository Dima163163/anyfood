import { useDispatch, useSelector } from 'react-redux';
import styles from './ItemMenu.module.css';
import {
  selectDisheById,
  selectOneDisheRequestStatus
} from '../../redux/dishes';
import { useEffect } from 'react';
import { IDLE, PENDING } from '../../constants/constants';
import { Loader } from '../Loader/Loader';
import { RouterLink } from '../RouterLink/RouterLink';
import { getRestaurantOneDish } from '../../redux/dishes/getRestaurantOneDish';

export const ItemMenu = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurantOneDish(id));
  }, [dispatch, id]);

  const dishe = useSelector((state) => selectDisheById(state, id));
  const requestStatus = useSelector(selectOneDisheRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (!dishe) {
    return null;
  }

  return (
    <li className={styles.listItem}>
      <RouterLink to={`/dish/${id}`} text={dishe.name} />
    </li>
  );
};
