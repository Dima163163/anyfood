import styles from './ResturantsTabsSection.module.css';

export const ResturantsTabsSection = ({children}) => {
  return (
    <div className={styles.restaurantsTabsSection}>
      {children}
    </div>
  )
}