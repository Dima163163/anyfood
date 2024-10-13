import { Outlet } from 'react-router-dom';
import { Cart } from '../Cart/Cart';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './Loyout.module.css';

export const Layout = () => {
  return (
    <div className={styles.loyout}>
      <ProgressBar />
      <Header />
      <Outlet/>
      <Cart />
      <Footer />
    </div>
  );
};
