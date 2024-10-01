import styles from './RestaurantTab.module.css';

export const RestaurantTab = ({title, changeRestaurant, isActive}) => {
  return (
    <button
      className={styles.restaurantTab}
      onClick={changeRestaurant}
      disabled={isActive}
    >
      {title}
    </button>
  )
};