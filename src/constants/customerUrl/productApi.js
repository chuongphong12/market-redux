
const API = process.env.REACT_APP_API + "customer/product/";

const productApi = {
    FIND_ALL : API + "findAll",
    FIND_TOP : API + "finTop"
}

export default productApi;