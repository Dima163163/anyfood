import { RestaurantReviews } from '../../../../../components/RestaurantReviews/RestaurantReviews'
import getReviewsByRestaurantId from '../../../../services/getReviewsByRestaurantById';
import getUsers from '../../../../services/getUsers';

export default async function ReviewsPage({params}) {
  const {restaurantId} = await params;
  const reviews = await getReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <RestaurantReviews
      reviews={reviews}
      users={users}
      restaurantId={restaurantId}
    />
  )
}