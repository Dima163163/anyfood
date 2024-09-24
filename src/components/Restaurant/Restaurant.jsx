import { ItemMenu } from '../ItemMenu/ItemMenu';
import { ItemReview } from '../ItemReview/ItemReview'

export const Restaurant = ({ restaurant }) => {
	if (!restaurant.name) {
		return null;
	}

	return (
		<main>
			<h2>{restaurant.name}</h2>
			{restaurant.menu.length > 0 && (
				<>
					<h3>Меню</h3>
					<ul>
						{restaurant.menu.map((menu) => (
							<ItemMenu key={menu.id} type='menu' text={menu.name} />
						))}
					</ul>
				</>
			)}
			{restaurant.reviews.length > 0 && (
				<>
					<h3>Отзывы</h3>
					<ul>
						{restaurant.reviews.map((review) => (
							<ItemReview key={review.id} type='review' text={review.text} />
						))}
					</ul>
				</>
			)}
		</main>
	);
};
