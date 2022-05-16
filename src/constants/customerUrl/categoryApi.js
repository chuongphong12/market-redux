const API = process.env.REACT_APP_API + "customer/category/";

const categoryApi = {
    FIND_ALL: API + "findAll",
    FIND_TOP: API + "finTop"
}

export default categoryApi;