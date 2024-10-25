import { RouterLink } from '../RouterLink/RouterLink';

export const RestaurantTab = ({ id, name }) => {
  return <RouterLink to={`/restaurants/${id}`} id={id} text={name} type='tab' />;
};
  