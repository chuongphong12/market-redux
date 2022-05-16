import {Fragment, useEffect} from "react";
import HomeProductItem from "./HomeProductItem";
import {useDispatch, useSelector} from "react-redux";
import {categoryActions, categorySelector} from "../HomeSlice";


function HomeProduct() {
	const dispatch = useDispatch();
	const categories = useSelector(categorySelector);
	
	
	useEffect(() => {
		dispatch(categoryActions.fetchCategory());
	}, [dispatch]);
	
	
	function renderCategories(category) {
		const categoryList = category?.slice(0, 5);
		
		
		return categoryList?.map((category, index) => {
			
			let {productDtos} = category;
			
			productDtos = productDtos.slice(0, 5);
			
			return (
					<Fragment key={index}>
						<div className="section-title style-2 wow animate__animated animate__fadeIn"
						     style={{paddingTop: "25px"}}>
							<h3>{category.name}</h3>
						</div>
						<div className="tab-content" id="myTabContent">
							<div className="row product-grid-4">
								{
									productDtos.map((product, index) =>
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
					{renderCategories(categories.category)}
				</div>
			</section>
	);
}

export default HomeProduct;