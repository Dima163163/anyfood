import { RestaurantPage } from '../../../../pages/RestaurantPage/RestaurantPage';
import getRestaurantById from '../../../services/getRestaurantById';
import { Suspense } from 'react';
import Loading from './loading';

export const generateStaticParams = () => {
  return [
    {id: "d9241927-09e1-44f3-8986-a76346869037"},
    {id: "bb8afbec-2fec-491f-93e9-7f13950dd80b"},
  ]
}

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

export default async function RestaurantLayout({children, params}) {
  const {restaurantId} = await params;
  const restaurant = await getRestaurantById(restaurantId);

  return (
    <Suspense fallback={<Loading/>}>
      <RestaurantPage name={restaurant.name}>
        {children}
      </RestaurantPage>
    </Suspense>
  )
}