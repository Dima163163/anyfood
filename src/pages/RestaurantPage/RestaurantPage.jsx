import { useParams } from 'react-router-dom';
import { RestaurantContainer } from '../../components/Restaurant/Restaurant.container';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantContainer id={restaurantId} />;
};
