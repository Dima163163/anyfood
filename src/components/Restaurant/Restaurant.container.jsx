import { useDispatch, useSelector } from 'react-redux';
import { Restaurant } from './Restaurant';
import { useEffect } from 'react';
import { getRestaurant } from '../../redux/restaurant/getRestaurant';
import {
  selectRestaurantById,
  selectRestaurantRequestStatus
} from '../../redux/restaurant';
import { IDLE, PENDING, REJECTED } from '../../constants/constants';
import { Loader } from '../Loader/Loader';

export const RestaurantContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant(id));
  }, [dispatch, id]);

  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const requestStatus = useSelector(selectRestaurantRequestStatus);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return <Loader />;
  }

  if (requestStatus === REJECTED) {
    return <div>Error</div>;
  }

  const { name, menu, reviews } = restaurant || {};

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
