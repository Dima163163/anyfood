import { Container } from '../Container/Container';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';

import styles from './Restaurant.module.css';
import { useTheme } from '../../context/themeContext/useTheme';
import classnames from 'classnames';
import { useEffect } from 'react';

export const Restaurant = ({ name }) => {
  const { restaurantId } = useParams();
  const { theme } = useTheme();
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
          <NavLink
            className={({ isActive }) =>
              classnames(
                styles.navTab,
                theme === 'light' ? styles.light : styles.dark,
                isActive && styles.restaurantLinkActive
              )
            }
            to='menu'
          >
            Меню
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              classnames(
                styles.navTab,
                theme === 'light' ? styles.light : styles.dark,
                isActive && styles.restaurantLinkActive
              )
            }
            to='reviews'
          >
            Отзывы
          </NavLink>
        </div>
        <Outlet />
      </div>
    </Container>
  );
};
