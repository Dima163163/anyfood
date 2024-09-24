import { Counter } from '../Counter/Counter';

export const ItemMenu = ({text}) => {
  return (
      <li>
        {text} <Counter/>
      </li>
  );
};