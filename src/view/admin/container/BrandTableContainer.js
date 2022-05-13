import {useSelector} from "react-redux";
import BrandTable from "../page/brand/BrandTable";
import {brandSelector} from "../../../core/admin/reducer/brandSlice";

const BrandTableContainer = ({match, history}) => {
    const brands = useSelector(brandSelector);
    return (
        <BrandTable match={match} history={history} brands={brands}/>
    );
}

export default BrandTableContainer;