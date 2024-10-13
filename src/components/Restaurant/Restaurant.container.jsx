import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/restaurants';
import { Restaurant } from './Restaurant';

export const RestaurantContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  const { name, menu, reviews } = restaurant || {};

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};
