import ProductTable from "../page/product/ProductTable";
import {useSelector} from "react-redux";
import {productSelector} from "../../../core/admin/reducer/productSlice";


const ProductTableContainer = ({match, history}) => {
    const products = useSelector(productSelector);
    return (<ProductTable match={match} history={history} products={products}/>
    );
}

export default ProductTableContainer;