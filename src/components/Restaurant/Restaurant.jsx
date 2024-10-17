import { Container } from '../Container/Container';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

import styles from './Restaurant.module.css';
import { useEffect } from 'react';
import { RouterLink } from '../RouterLink/RouterLink';

export const Restaurant = ({ name }) => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('menu');
  }, [navigate, restaurantId]);

  if (!name) {
    return null;
  }

  return (
    <Container>
      <div className={styles.restautantWrapper}>
        <h2 className={styles.restaurantTitle}>{name}</h2>
        <div className={styles.tabsWrapper}>
          <RouterLink to='menu' text='Меню' type='link' />
          <RouterLink to='reviews' text='Отзывы' type='link' />
        </div>
        <Outlet />
      </div>
    </Container>
  );
};
