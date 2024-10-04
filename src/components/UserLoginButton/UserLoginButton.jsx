import { useUser } from '../../context/userContext/useUser';
import Button from '../Button/Button'

export const UserLoginButton = () => {
  const {user, loginUser} = useUser();
  return (
    <Button
      onClick={loginUser}
      text={user ? `${user}. Выйти` : 'Войти'}       styleViewVariant="border"
      colorViewVariant="darkBtn"
    />
  )
}