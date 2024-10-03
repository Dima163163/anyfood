import Button from '../Button/Button';

export const RestaurantTab = ({title, changeRestaurant, isActive}) => {
  return (
    <Button
      onClick={changeRestaurant}
      isActive={isActive}
      text={title}
      typeBtn="restaurantTab"
    />
  )
};