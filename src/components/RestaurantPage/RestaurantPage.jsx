import { ItemMenu } from '../ItemMenu/ItemMenu';
import { ItemReview } from '../ItemReview/ItemReview'
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const RestaurantPage = ({ restaurantActive }) => {
  if (!restaurantActive.name) {
    return null;
  }

  return (
    <main>
      <h2>{restaurantActive.name}</h2>
      {restaurantActive.menu.length > 0 && (
        <>
          <h3>Меню</h3>
          <ul>
            {restaurantActive.menu.map((menu) => (
              <ItemMenu key={menu.id} type='menu' text={menu.name} />
            ))}
          </ul>
        </>
      )}
      {restaurantActive.reviews.length > 0 && (
        <>
          <h3>Отзывы</h3>
          <ul>
            {restaurantActive.reviews.map((review) => (
              <ItemReview key={review.id} type='review' text={review.text} />
            ))}
          </ul>
        </>
      )}
      <ReviewForm/>
    </main>
  );
};
