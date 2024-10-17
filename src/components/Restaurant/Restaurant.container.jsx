import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from './Restaurant';
import { useEffect } from 'react';
import { getOneRestaurant } from '../../redux/restaurants/getOneRestaurant';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../Loader/Loader';
import {
  selectOneRestaurantRequestStatus,
  selectRestaurantById
} from '../../redux/restaurants';

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneRestaurant(id));
  }, [dispatch, id]);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = useSelector(selectOneRestaurantRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  const { name, menu, reviews } = restaurant || {};

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
