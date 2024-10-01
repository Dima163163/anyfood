import styles from './RestaurantsTabsWrapper.module.css';

export const RestaurantsTabsWrapper = ({children}) => {
  return (
    <div className={styles.wrapperTabs}>
      {children}
    </div>
  )
};