import { Container } from '../Container/Container';
import { HeaderWrapper } from '../HeaderWrapper/HeaderWrapper';
import { NavlinkItems } from '../NavLinkItems/NavlinkItems';
import { ToggleThemeButton } from '../ToggleThemeButton/ToggleThemeButton';
import { UserLoginButton } from '../UserLoginButton/UserLoginButton';
import { Watch } from '../Watch/Watch';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <HeaderWrapper>
          <h1 className={styles.headerTitle}>ANYFOOD</h1>
          <NavlinkItems/>
          <div className={styles.headerBtnsContainer}>
            <ToggleThemeButton />
            <UserLoginButton />
          </div>
          <Watch />
        </HeaderWrapper>
      </Container>
    </div>
  );
};
