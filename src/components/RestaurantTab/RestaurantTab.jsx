import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import { selectRestaurantById } from '../../redux/restaurants';

export const RestaurantTab = ({ id, onClick, isActive }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <Button
      onClick={onClick}
      isActive={isActive}
      text={restaurant.name}
      sizeViewVariant='default'
      styleViewVariant='notBorder'
    />
  );
};
