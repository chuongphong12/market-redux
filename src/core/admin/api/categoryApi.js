import * as categoryApiUrl from "../constant/apiUrl/categoryApiUrl";
import queryString from "query-string";
import apiService from "../../services/ApiService";

const categoryApi = {
    findAll() {
        return apiService.get(categoryApiUrl.FIND_ALL);

    }, deleteById(id) {
        return apiService.delete(categoryApiUrl.DELETE_BY_ID + queryString.stringify({id}));

    }, add(category) {
        return apiService.post(categoryApiUrl.ADD, category);

    }
}

export default categoryApi;