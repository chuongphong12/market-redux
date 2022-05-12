import * as productApiUrl from "../constant/apiUrl/productApiUrl";
import apiService from "../../services/ApiService";

const customerProductApi = {
    findAll() {
        return apiService.get(productApiUrl.FIND_ALL);
    }
}
export default customerProductApi;

