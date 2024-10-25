import { Suspense } from 'react'
import { RestaurantReviews } from '../../../../../components/RestaurantReviews/RestaurantReviews'
import Loading from './loading'
import getReviewsByRestaurantId from '../../../../services/getReviewsByRestaurantById';
import getUsers from '../../../../services/getUsers';

export default async function ReviewsPage({params}) {
  const {restaurantId} = await params;
  const reviews = await getReviewsByRestaurantId(restaurantId);
  const users = await getUsers();

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantReviews reviews={reviews} users={users} restaurantId={restaurantId} />
    </Suspense>
  )
}