import { useEffect, useState } from 'react';

import styles from './ProgressBar.module.css';

export const ProgressBar = () => {
  const [pecent, setPercent] = useState(0);

  useEffect(() => {
    const calculetesScroll = () => {
      const percent =
        Math.floor((window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100);
      setPercent(percent);
    };
    window.addEventListener('scroll', calculetesScroll);

    return () => {
      window.removeEventListener('scroll', calculetesScroll);
    };
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{
        width: `${pecent}%`
      }}
    ></div>
  );
};
