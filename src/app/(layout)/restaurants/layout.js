import { Suspense } from 'react';
import { RestaurantsPage } from '../../../pages/RestaurantsPage/RestaurantsPage';
import { getRestaurants } from '../../services/getRestaurants';
import Loading from './loading';
import { revalidatePath } from 'next/cache';

export default async function RestaurantsLayout({children}) {
  const restaurants = await getRestaurants();
  revalidatePath('/restaurants');

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantsPage restaurants={restaurants}>
        {children}
      </RestaurantsPage>
    </Suspense>
  )
}