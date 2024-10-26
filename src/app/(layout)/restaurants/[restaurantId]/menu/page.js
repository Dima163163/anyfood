import { RestaurantMenu } from '../../../../../components/RestaurantMenu/RestaurantMenu'
import getDishesByRestaurantId from '../../../../services/getDishesByRestaurantId';

export default async function MenuPage({params}) {
  const {restaurantId} = await params;
  const dishes = await getDishesByRestaurantId(restaurantId);

  return <RestaurantMenu dishes={dishes}/>
}