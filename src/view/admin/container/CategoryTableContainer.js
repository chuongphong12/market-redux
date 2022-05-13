import CategoryTable from "../page/category/CategoryTable";
import {useSelector} from "react-redux";
import {categorySelector} from "../../../core/admin/reducer/categorySlice";

const CategoryTableContainer = ({match, history}) => {
    const categories = useSelector(categorySelector);
    return (
        <CategoryTable match={match} history={history} categories={categories}/>
    );
}

export default CategoryTableContainer;
