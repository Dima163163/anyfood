import { Item } from '../Item/Item';
import { List } from '../List/List';

export const Main = ({restaurant}) => {
  if (!restaurant) {
    return null
  }
  
  return (
    <main>
      <h2>{restaurant.name}</h2>
      {restaurant.menu.length > 0 && (
        <>
          <h3>Меню</h3>
          <List>
            {restaurant.menu.map(menu => (
              <Item key={menu.id} type="menu" text={menu.name}/>
            ))}
          </List>
        </>
      )}
      {restaurant.reviews.length > 0 && (
        <>
          <h3>Отзывы</h3>
          <List>
            {
              restaurant.reviews.map(review => (
                <Item key={review.id} type="review" text={review.text} />
              ))
            }
          </List>
        </>
      )}
    </main>
  )
};