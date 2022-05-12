import * as brandApiUrl from "../constant/apiUrl/brandApiUrl";
import queryString from "query-string";
import apiService from "../../services/ApiService";

const brandApi = {
    findAll() {
        return apiService.get(brandApiUrl.FIND_ALL);
    }, deleteId(id) {
        return apiService.delete(brandApiUrl.DELETE_BY_ID + queryString.stringify({id}));
    }, add(brand) {
        return apiService.post(brandApiUrl.ADD, brand);
    }
}

export default brandApi;