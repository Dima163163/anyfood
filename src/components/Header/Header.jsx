import { Container } from '../Container/Container';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <h1 className={styles.headerTitle}>
          ANYFOOD
        </h1>
      </Container>
    </div>
  )
};