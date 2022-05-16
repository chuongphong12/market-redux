import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import SingleMenuItem from "./SingleMenuItem";
import {categoryActions, categorySelector} from "../../../../../features/customer/page/home/HomeSlice";

function SingleMenuList() {
	const dispatch = useDispatch();
	const categoriesSelector = useSelector(categorySelector);
	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		dispatch(categoryActions.fetchCategory());
		setCategories(categoriesSelector.category);
	}, [categoriesSelector.category, dispatch]);
	
	
	return (
			<div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
				<nav>
					<ul>
						{
							categories?.map((item, index) => {
								return <SingleMenuItem key={index} item={item}/>
							})
						}
					</ul>
				</nav>
			</div>
	)
}

export default SingleMenuList;