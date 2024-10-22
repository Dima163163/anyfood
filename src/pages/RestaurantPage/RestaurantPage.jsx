'use client'
import { useParams } from 'next/navigation';
import { RestaurantContainer } from '../../components/Restaurant/Restaurant.container';

export const RestaurantPage = () => {
  const params = useParams();
  const { restaurantId } = params;

  return <RestaurantContainer id={restaurantId} />;
};
