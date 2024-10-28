import { RestaurantsPage } from '../../../pages/RestaurantsPage/RestaurantsPage';
import { getRestaurants } from '../../services/getRestaurants';

export default async function RestaurantsLayout({children}) {
  const restaurants = await getRestaurants();

  return (
    <RestaurantsPage restaurants={restaurants}>
      {children}
    </RestaurantsPage>
  )
}