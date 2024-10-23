import { Restaurant } from './Restaurant';
import { Loader } from '../Loader/Loader';
import { useGetRestaurantByIdQuery } from '../../redux/services/api/api';

export const RestaurantContainer = ({ id,children }) => {
  const { data, isLoading, isError } = useGetRestaurantByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data?.name) {
    return null;
  }

  const { name } = data;

  return <Restaurant name={name}>{children}</Restaurant>;
};
