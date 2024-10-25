'use client';
import { Container } from '../Container/Container';
import styles from './Restaurant.module.css';
import { useEffect } from 'react';
import { RouterLink } from '../RouterLink/RouterLink';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

export const Restaurant = ({ children, name }) => {
  const params = useParams();
  const { restaurantId } = params;
  const router = useRouter();

  useEffect(() => {
    router.push(`/restaurants/${restaurantId}/menu`);
  }, [router, restaurantId]);

  if (!name) {
    return null;
  }

  return (
    <Container>
      <div className={styles.restautantWrapper}>
        <h2 className={styles.restaurantTitle}>{name}</h2>
        <div className={styles.tabsWrapper}>
          <RouterLink
            to={`/restaurants/${restaurantId}/menu`}
            text='Меню'
            type='link'
            linkPath={true}
          />
          <RouterLink
            to={`/restaurants/${restaurantId}/reviews`}
            text='Отзывы'
            type='link'
            linkPath={true}
          />
        </div>
        {children}
      </div>
    </Container>
  );
};
