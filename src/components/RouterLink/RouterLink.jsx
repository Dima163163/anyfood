'use client'
import classNames from 'classnames';
import { useTheme } from '../../context/themeContext/useTheme';
import Link from 'next/link';

import styles from './RouterLink.module.css';
import { useParams, usePathname } from 'next/navigation';

export const RouterLink = ({ text, to, type = '', linkPath=''}) => {
  const { theme } = useTheme();
  const params = useParams();
  const {restaurantId} = params;
  const pathname = usePathname();

  let link = to.split('/').at(-1)
  let restLink
  if (linkPath) {
    restLink = pathname.split('/').at(-1)
  }

  const isActive = linkPath ? restLink === link : restaurantId === link;
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