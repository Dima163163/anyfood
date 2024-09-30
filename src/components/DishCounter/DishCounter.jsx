import { useState } from 'react';
import { Counter } from '../Counter/Counter';

import styles from './DishCounter.module.css';

export const DishCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return <Counter count={count} increment={increment} decrement={decrement} styleWrapper={styles.wrapper} styleBtn={styles.dashCounterBtn} />;
};
