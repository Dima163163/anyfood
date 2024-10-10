import { useEffect } from 'react';

export const useWatch = (callback) => {
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date().toLocaleTimeString();
      callback(currentTime);
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [callback]);
};
