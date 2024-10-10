import { useState } from 'react';
import { useWatch } from '../../hooks/useWatch';

import styles from './Watch.module.css';

export const Watch = () => {
  const [time, setTime] = useState(0);
  useWatch(setTime);

  return (
    <div className={styles.watchWrapper}>
      <p className={styles.watch}>Время: {time}</p>
    </div>
  );
};
