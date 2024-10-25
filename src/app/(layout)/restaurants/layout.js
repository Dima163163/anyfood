import { Suspense } from 'react';
import { RestaurantsPage } from '../../../pages/RestaurantsPage/RestaurantsPage';
import { getRestaurants } from '../../services/getRestaurants';
import Loading from './loading';

export default async function RestaurantsLayout({children}) {
  const restaurants = await getRestaurants();

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantsPage restaurants={restaurants}>
        {children}
      </RestaurantsPage>
    </Suspense>
  )
}