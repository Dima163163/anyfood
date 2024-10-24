'use client';
import { useEffect } from 'react';
import { RouterLink } from '../RouterLink/RouterLink';
import styles from './NavlinkItems.module.css';
import { useRouter } from 'next/navigation';

export const NavlinkItems = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/homepage')
  }, [router]);

  return (
    <nav className={styles.navLinkItems}>
      <RouterLink
        to={`/homepage`}
        text='Основная страница'
        type='navLink'
        linkPath={true}
      />
      <RouterLink
        to={`/restaurants`}
        text='Рестораны'
        type='navLink'
        linkPath={true}
      />
    </nav>
  )
}
