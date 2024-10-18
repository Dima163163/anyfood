import { useUser } from '../../context/userContext/useUser';
import Button from '../Button/Button';

export const UserLoginButton = () => {
  const { user, loginUser } = useUser();
  const { isAuthorized, userName } = user;

  return (
    <Button
      onClick={loginUser}
      text={isAuthorized ? `${userName}. Выйти` : 'Войти'}
      styleViewVariant='border'
      colorViewVariant='darkBtn'
    />
  );
};
