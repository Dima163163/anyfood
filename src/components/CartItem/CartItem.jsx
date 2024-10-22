import { useGetDishByIdQuery } from '../../redux/services/api/api';

export const CartItem = ({ id, amount }) => {
  const { data } = useGetDishByIdQuery(id);
  const { name } = data || {};

  if (!name) {
    return null;
  }
  return (
    <>
      <div>
        {name} - {amount}
      </div>
    </>
  );
};
