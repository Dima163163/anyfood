import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/restaurants';
import { RouterLink } from '../RouterLink/RouterLink';

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <RouterLink to={id} text={restaurant.name} type='tab' />;
};
