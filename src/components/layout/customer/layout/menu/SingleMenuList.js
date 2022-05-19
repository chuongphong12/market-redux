import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { categoryActions,categorySelector } from "../../../../../features/customer/page/home/HomeSlice";
import SingleMenuItem from "./SingleMenuItem";

const SingleMenuList = () => {
	const dispatch = useDispatch();
	const categoriesSelector = useSelector(categorySelector);
	const categories = categoriesSelector.category || [];
	console.log('categoriesSelector.category: ', categoriesSelector.category)
	useEffect(() => {
		// dispatch(categoryActions.fetchCategory());
	}, [dispatch]);
	
	return (
			<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
				<nav>
					<ul>
						{categories.map((item, index) => {
							return <SingleMenuItem key={index} item={item}/>
							})
						}
					</ul>
				</nav>
			</div>
	)
}

export default SingleMenuList;