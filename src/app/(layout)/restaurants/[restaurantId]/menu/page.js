import { Suspense } from 'react';
import { RestaurantMenu } from '../../../../../components/RestaurantMenu/RestaurantMenu'
import getDishesByRestaurantId from '../../../../services/getDishesByRestaurantId';
import Loading from './loading';

export default async function MenuPage({params}) {
  const {restaurantId} = await params;
  const dishes = await getDishesByRestaurantId(restaurantId);

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantMenu dishes={dishes}/>
    </Suspense>
  )
}