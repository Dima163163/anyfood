import { DishInfo } from '../../../../components/DishInfo/DishInfo';
import DishPage from '../../../../pages/DishPage/DishPage';
import getDishById from '../../../services/getDishById';

export default async function PageDishId({params}) {
  const {dishId} = await params;
  const dish = await getDishById(dishId);

  return (
    <DishPage>
      <DishInfo dish={dish} dishId={dishId} />
    </DishPage>
  );
}