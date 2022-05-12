import CategoryTable from "./category/CategoryTable";
import NotFound from "./notFound/NotFound";
import CategoryTableContainer from "../container/CategoryTableContainer";
import BrandTableContainer from "../container/BrandTableContainer";
import FormAddCategory from "./category/FormAddCategory";
import ProductTableContainer from "../container/ProductTableContainer";

export const routes = [
    // {
    //     url: "/admin/dashboard",
    //     isExact: false,
    //     component: null,
    // },
    {
        url: "/admin/category/list",
        isExact: false,
        component: ({match, history}) => <CategoryTableContainer match={match} history={history}/>,
    },
    {
        url: "/admin/category/add",
        isExact: false,
        component: ({match, history}) => <FormAddCategory match={match} history={history}/>,
    },
    {
        url: "/admin/brand/list",
        isExact: false,
        component: ({match, history}) => <BrandTableContainer match={match} history={history}/>,
    },
    {
        url: "/admin/product/list",
        isExact: false,
        component: ({match, history}) => <ProductTableContainer match={match} history={history}/>,
    },

   //
    {
        url: "",
        isExact: false,
        component: ({match, history}) => <NotFound match={match} history={history}/>,
    },

]