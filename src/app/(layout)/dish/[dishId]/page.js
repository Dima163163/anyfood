import { Suspense } from 'react';
import { DishInfo } from '../../../../components/DishInfo/DishInfo';
import DishPage from '../../../../pages/DishPage/DishPage';
import getDishById from '../../../services/getDishById';
import Loading from './loading';

export default async function PageDishId({params}) {
  const {dishId} = await params;
  const dish = await getDishById(dishId);

  return (
    <Suspense fallback={<Loading/>}>
      <DishPage>
        <DishInfo dish={dish} dishId={dishId} />
      </DishPage>
    </Suspense>
  );
}