'use client'

import { RouterLink } from '../RouterLink/RouterLink';

export const RestaurantTab = ({ id, name }) => {
  return <RouterLink to={`/restaurant/${id}`} id={id} text={name} type='tab' />;
};
  