import { Counter } from '../Counter/Counter';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  selectAmountById
} from '../../redux/ui/cart';

export const DishCounter = ({ id }) => {
  const amount = useSelector((state) => selectAmountById(state, id));
  const dispatch = useDispatch();

  const increment = () => {
    if (amount < 5) {
      dispatch(addToCart(id));
    }
  };

  const decrement = () => {
    if (amount > 0) {
      dispatch(removeFromCart(id));
    }
  };
  return (
    <Counter
      count={amount}
      increment={increment}
      decrement={decrement}
      styleTypeWrapper='default'
      styleViewVariant='border'
      colorViewVariant='darkBtn'
    />
  );
};
