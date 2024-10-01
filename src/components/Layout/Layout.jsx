import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { ProgressBar } from '../ProgressBar/ProgressBar';

import styles from './Loyout.module.css';

export const Layout = ({children}) => {
  return (
    <div className={styles.loyout}>
    <ProgressBar/>
    <Header/>
      {children}
    <Footer/>
    </div>
  )
};
