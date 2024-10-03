import { Container } from '../Container/Container';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';
import { UserLoginButton } from '../UserLoginButton/UserLoginButton';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <HeaderWrapper>
        <h1 className={styles.headerTitle}>
          ANYFOOD
        </h1>
        <div className={styles.headerBtnsContainer}>
          <ToggleThemeButton/>
          <UserLoginButton/>
        </div>
        </HeaderWrapper>
      </Container>
    </div>
  )
};