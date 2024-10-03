import { useTheme } from '../../context/themeContext/useTheme';
import classnames from 'classnames';
import styles from './Button.module.css';


const Button = ({onClick, text, typeBtn, isActive=false}) => {
  const {theme} = useTheme();
  console.log('theme: ', theme);
  return (
    <button
      onClick={onClick}
      disabled={isActive}
      className={
        classnames(
          {
            [styles.dashCounterBtn]: typeBtn === 'dashCounterBtn',
            [styles.themeBtn]: typeBtn === 'themeBtn',
            [styles.loginUserBtn]: typeBtn === 'loginUserBtn',
            [styles.ratingBtn]: typeBtn === 'ratingBtn',
            [styles.clearBtn]: typeBtn === 'clearBtn',
            [styles.restaurantTab]: typeBtn === 'restaurantTab',
            [styles.lightTab]: typeBtn === 'restaurantTab' && theme === 'light',
            [styles.darkTab]: typeBtn === 'restaurantTab' && theme === 'dark',
            [styles.light]: (
              typeBtn === 'ratingBtn'
              || typeBtn === 'clearBtn'
              || typeBtn === 'dashCounterBtn'
              || typeBtn === 'themeBtn'
              || typeBtn === 'liginUserBtn'
            ) && theme === 'light',
            [styles.dark]: (
              typeBtn === 'ratingBtn'
              || typeBtn === 'clearBtn'
              || typeBtn === 'dashCounterBtn'
              || typeBtn === 'themeBtn'
              || typeBtn === 'liginUserBtn'
            ) && theme === 'dark',
          }
        )
      }
    >{text}</button>
  )
}
export default Button