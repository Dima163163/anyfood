import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/ui/cart';
import { CartItem } from '../CartItem/CartItem';
import { DishCounter } from '../DishCounter/DishCounter';
import styles from './Cart.module.css';

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <>
      <h3>Корзина:</h3>
      <ul>
        {items.map(({ id, amount }) => (
          <li className={styles.cartItem} key={id}>
            <CartItem id={id} amount={amount} />
            <DishCounter id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
