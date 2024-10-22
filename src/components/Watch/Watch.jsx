'use client';
import { useState } from 'react';
import { useWatch } from '../../hooks/useWatch';

import styles from './Watch.module.css';

export const Watch = () => {
  const date = new Date().toLocaleTimeString();
  const [time, setTime] = useState(date);
  useWatch(setTime);

  return (
    <div className={styles.watchWrapper}>
      <p className={styles.watch}>Время: {time}</p>
    </div>
  );
};
