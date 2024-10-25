'use client'
import { RestaurantContainer } from '../../components/Restaurant/Restaurant.container';

export const RestaurantPage = ({children, name}) => {
  return <RestaurantContainer name={name}>{children}</RestaurantContainer>;
};
