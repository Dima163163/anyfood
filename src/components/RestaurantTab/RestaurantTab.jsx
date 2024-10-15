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
      className={({ isActive }) =>
        classnames(
          styles.restaurantTab,
          theme === 'light' ? styles.light : styles.dark,
          isActive && styles.activeLink
        )
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
