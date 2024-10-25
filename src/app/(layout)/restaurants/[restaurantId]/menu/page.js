import { Suspense } from 'react';
import { RestaurantMenu } from '../../../../../components/RestaurantMenu/RestaurantMenu'
import getDishesByRestaurantId from '../../../../services/getDishesByRestaurantId';
import Loading from './loading';

export async function generateMetadata({ params }) {
  const { restaurantId } = await params;
  const result = await fetch(
    `http://localhost:3001/api/restaurant/${restaurantId}`
  ).then((res) => res.json());

  const { name } = result;
  console.log('name: ', name);

  return {
    title: name
  };
}

export default async function MenuPage({params}) {
  const {restaurantId} = await params;
  const dishes = await getDishesByRestaurantId(restaurantId);

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantMenu dishes={dishes}/>
    </Suspense>
  )
}