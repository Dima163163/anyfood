import Button from '../Button/Button';

export const RestaurantTab = ({title, changeRestaurant, isActive}) => {
  return (
    <Button
      onClick={changeRestaurant}
      isActive={isActive}
      text={title}
      sizeViewVariant="default"
      styleViewVariant="notBorder"
    />
  )
};