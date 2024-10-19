import { useGetUsersQuery } from '../../redux/services/api/api';
import Button from '../Button/Button';
import { Loader } from '../Loader/Loader';

export const ItemReview = ({ text, userId, rating }) => {
  const { data, isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Error</div>;
  }

  if (!data?.length) {
    return null;
  }
  
  const user = data.find(user => user.id === userId);

  return (
    <li>
      <p>
        {user.name}: {text}. Рейтинг: {rating}
      </p>
      <Button
        onClick={() => {}}
        text='Редактировать'
        styleViewVariant='border'
        colorViewVariant='darkBtn'
      />
    </li>
  );
};
