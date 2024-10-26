import getRestaurantById from '../../../services/getRestaurantById';
import { RestaurantContainer } from '../../../../components/Restaurant/Restaurant.container';

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

  return {
    title: name
  };
}

export default async function RestaurantLayout({children, params}) {
  const {restaurantId} = await params;
  const restaurant = await getRestaurantById(restaurantId);

  return (
    <RestaurantContainer name={restaurant.name}>
      {children}
    </RestaurantContainer>
  )
}