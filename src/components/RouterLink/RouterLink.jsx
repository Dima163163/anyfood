'use client'
import classNames from 'classnames';
import { useTheme } from '../../context/themeContext/useTheme';
import Link from 'next/link';

import styles from './RouterLink.module.css';
import { useParams } from 'next/navigation';

export const RouterLink = ({ text, to, type = ''}) => {
  const { theme } = useTheme();
  const params = useParams();;
  const isActive = params[0] === to;
  return (
    <Link className={
        classNames(
          styles.navTab,
          type === 'btn' && styles.btn,
          theme === 'light' ? styles.light : styles.dark,
          isActive && type === 'tab' && styles.tabActive,
          isActive && type === 'link' && styles.linkActive
        )
      }
      href={to}
    >
      {text}
    </Link>
  );
};