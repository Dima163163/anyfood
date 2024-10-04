import { useTheme } from '../../context/themeContext/useTheme';
import classnames from 'classnames';
import styles from './Button.module.css';


const Button = ({
  onClick,
  text,
  sizeViewVariant,
  isActive=false,
  colorViewVariant,
  styleViewVariant
}) => {
  const {theme} = useTheme();

  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={
        classnames(styles.button,
          {
            [styles.default]: sizeViewVariant === "default",
            [styles.xl]: sizeViewVariant === "xl",
            [styles.border]: styleViewVariant === "border",
            [styles.notBorder]: styleViewVariant === "notBorder",
            [styles.darkBtn]: colorViewVariant === "darkBtn",
            [styles.lightBtn]: colorViewVariant === "lightBtn",
            [styles.light]: theme === "light",
            [styles.dark]: theme === "dark",
          }
        )
      }
    >{text}</button>
  )
}
export default Button