import { useSelector } from 'react-redux';
import { selectDisheById } from '../../redux/dishes';

export const CartItem = ({ id, amount }) => {
  const { name } = useSelector((state) => selectDisheById(state, id)) || {};

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
