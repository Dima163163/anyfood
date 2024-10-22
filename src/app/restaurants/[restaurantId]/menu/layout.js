import { RestaurantPage } from '../../../../pages/RestaurantPage/RestaurantPage';

export default function MenuLayout({children}) {
  return (
    <RestaurantPage>
      {children}
    </RestaurantPage>
  )
}