import { DishCounter } from '../DishCounter/DishCounter';

export const ItemMenu = ({ text }) => {
  return (
    <li>
      {text} <DishCounter />
    </li>
  );
};
