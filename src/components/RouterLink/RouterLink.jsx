import classNames from 'classnames';
import { useTheme } from '../../context/themeContext/useTheme';
import { NavLink } from 'react-router-dom';

import styles from './RouterLink.module.css';

export const RouterLink = ({ text, to, type = '' }) => {
  const { theme } = useTheme();

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(
          styles.navTab,
          type === 'btn' && styles.btn,
          theme === 'light' ? styles.light : styles.dark,
          isActive && type === 'link' ? styles.linkActive : null,
          isActive && type === 'tab' ? styles.tabActive : null
        )
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};
