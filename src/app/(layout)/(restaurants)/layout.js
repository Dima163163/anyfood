import { RestaurantsPage } from '../../../pages/RestaurantsPage/RestaurantsPage';

export default function RestaurantsLayout({children}) {
  return (
    <RestaurantsPage>
      {children}
    </RestaurantsPage>
  )
}