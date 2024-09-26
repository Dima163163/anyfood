import { useEffect, useState } from 'react';

export const ProgressBar = () => {
  const [pecent, setPercent] = useState(0);
  useEffect(() => {
    const calculetesScroll = () => {
      const height =
        document.body.scrollHeight - document.documentElement.clientHeight;
      const scroll = document.documentElement.scrollTop;
      const percent = (scroll / height) * 100;
      setPercent(percent);
    };
    window.addEventListener('scroll', calculetesScroll);

    return () => {
      window.removeEventListener('scroll', calculetesScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        backgroundColor: 'red',
        height: '10px',
        width: `${pecent}%`
      }}
    ></div>
  );
};
