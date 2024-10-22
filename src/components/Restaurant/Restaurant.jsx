'use client'
import { Container } from '../Container/Container';
import styles from './Restaurant.module.css';
import { useEffect } from 'react';
import { RouterLink } from '../RouterLink/RouterLink';
import { redirect, useParams } from 'next/navigation';

export const Restaurant = ({ name, children }) => {
  const params = useParams();
  const { restaurantId } = params;

  // useEffect(() => {
  //   redirect(`${restaurantId}/menu`);
  // }, [restaurantId]);

  if (!name) {
    return null;
  }

  return (
    <Container>
      <div className={styles.restautantWrapper}>
        <h2 className={styles.restaurantTitle}>{name}</h2>
        <div className={styles.tabsWrapper}>
          <RouterLink to={`${restaurantId}/menu`} text='Меню' type='link' />
          <RouterLink to={`${restaurantId}/reviews`} text='Отзывы' type='link' />
        </div>
        {children}
      </div>
    </Container>
  );
};
