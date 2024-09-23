export const Tabs = ({restaurants, changeRestaurant}) => {
  return (
    <>
      {restaurants.length > 0 && 
        <div style={{display: 'flex', gap: '5px'}}>
          {restaurants.map((restaurant, index) => (
            <button
              key={restaurant.id}
              onClick={() => changeRestaurant(index)}
            >
              {restaurant.name}
            </button>
          ))}
        </div>
      }
    </>
  )
};