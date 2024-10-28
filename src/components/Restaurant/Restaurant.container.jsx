import { Restaurant } from './Restaurant';

export const RestaurantContainer = ({ children, name }) => {
  return <Restaurant name={name}>{children}</Restaurant>;
};
