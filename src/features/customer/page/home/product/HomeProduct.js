import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { categorySelector } from '../HomeSlice';
import HomeProductItem from './HomeProductItem';

function HomeProduct() {
	const categories = useSelector(categorySelector);

	const renderCategories = () => {
		const categoryList = categories.category?.slice(0, 5);

		return categoryList?.map((category, index) => {
			const products = category.productDtos?.slice(0, 5);

			return (
				<Fragment key={index}>
					<div
						className='section-title style-2 wow animate__animated animate__fadeIn'
						style={{ paddingTop: '25px' }}>
						<h3>{category.name}</h3>
					</div>
					<div className='tab-content' id='myTabContent'>
						<div className='row product-grid-4'>
							{products.map((product, index) => (
								<HomeProductItem key={index} product={product} />
							))}
						</div>
					</div>
				</Fragment>
			);
		});
	};

	return (
		<section className='product-tabs section-padding position-relative'>
			<div className='container'>{renderCategories()}</div>
		</section>
	);
}

export default HomeProduct;
