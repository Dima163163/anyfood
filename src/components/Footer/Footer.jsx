import { Container } from '../Container/Container';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <h2 className={styles.title}>FOOTER</h2>
      </Container>
    </div>
  )
};