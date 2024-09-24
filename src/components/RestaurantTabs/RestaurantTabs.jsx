export const RestaurantTabs = ({restaurants, changeRestaurant}) => {
  return (
    <>
      {restaurants.length > 0 && 
        <div style={{display: 'flex', gap: '5px'}}>
          {restaurants.map(restaurant => (
            <button
              key={restaurant.id}
              onClick={() => changeRestaurant(restaurant.id)}
            >
              {restaurant.name}
            </button>
          ))}
        </div>
      }
    </>
  )
};