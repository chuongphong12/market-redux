import {Fragment, useEffect} from "react";
import HomeProductItem from "./HomeProductItem";
import {useDispatch, useSelector} from "react-redux";
import {categoryActions, categorySelector} from "../HomeSlice";

const HomeProduct = () => {
	const dispatch = useDispatch();
	const categories = useSelector(categorySelector);
	
	console.log('hello')
	useEffect(() => {
		// dispatch(categoryActions.fetchCategory());
	}, [dispatch]);
	
	
	function renderCategories() {
		const categoryList = categories.category?.slice(0, 5);
		
		return categoryList?.map((category, index) => {
		const products = category.productDtos?.slice(0, 5);
			
			return (
					<Fragment key={index}>
						<div className="section-title style-2 wow animate__animated animate__fadeIn" style={{paddingTop: "25px"}}>
							<h3>{category.name}</h3>
						</div>
						<div className="tab-content" id="myTabContent">
							<div className="row product-grid-4">
								{
									products.map((product, index) =>
											<HomeProductItem key={index} product={product}/>
									)
								}
							</div>
						</div>
					</Fragment>
			)
		});
	}
	
	
	return (
			<section className="product-tabs section-padding position-relative">
				<div className="container">
					{renderCategories}
				</div>
			</section>
	);
}

export default HomeProduct;