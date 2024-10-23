import { DishPage } from '../../../pages/DishPage/DishPage';

export default function DishPageLayout({children}) {
  return (
    <DishPage>  
      {children}
    </DishPage>
  );
}