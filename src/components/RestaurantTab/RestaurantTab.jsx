export const RestaurantTab = ({title, changeRestaurant, isActive}) => {
  return (
    <button
      onClick={changeRestaurant}
      disabled={isActive}
    >
      {title}
    </button>
  )
};