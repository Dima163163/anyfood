import { useSelector } from 'react-redux';
import { selectRestaurantById } from '../../redux/restaurants';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/themeContext/useTheme';
import styles from './RestaurantTab.module.css';
import classnames from 'classnames';

export const RestaurantTab = ({ id }) => {
  const { theme } = useTheme();
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return (
    <NavLink
      to={id}
      className={classnames(
        styles.restaurantTab,
        ({ isActive }) => isActive && 'active',
        theme === 'light' ? styles.light : styles.dark
      )}
    >
      {restaurant.name}
    </NavLink>
  );
};
