import { RouterLink } from '../RouterLink/RouterLink';

export const RestaurantTab = ({ id, name }) => {
  return <RouterLink to={id} text={name} type='tab' />;
};
  