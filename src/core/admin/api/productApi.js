import * as productApiUrl from "../constant/apiUrl/productApiUrl";
import queryString from "query-string";
import apiService from "../../services/ApiService";


const productApi = {
    findAll() {
        return apiService.get(productApiUrl.FIND_ALL);
    }, deleteById(id) {
        return apiService.delete(productApiUrl.DELETE_BY_ID + queryString.stringify({id}));

    }, add(product) {
        return apiService.post(productApiUrl.ADD, product);
    }
}

export default productApi;