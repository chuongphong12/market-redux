import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../../features/customer/page/home/HomeSlice';
import SingleMenuItem from './SingleMenuItem';

function SingleMenuList() {
	const categoriesSelector = useSelector(categorySelector);
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		setCategories(categoriesSelector.category);
	}, [categoriesSelector.category]);

	return (
		<div className='main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading'>
			<nav>
				<ul>
					{categories
						.map((category, index) => {
							return <SingleMenuItem key={index} category={category} />;
						})
						.slice(0, 7).reverse()}
				</ul>
			</nav>
		</div>
	);
}

export default SingleMenuList;
