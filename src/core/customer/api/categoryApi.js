import * as categoryApiUrl from "../constant/apiUrl/categoryApiUrl";
import apiService from "../../services/ApiService";

const customerCategoryApi = {
    findAll() {
        return apiService.get(categoryApiUrl.FIND_ALL);
    }
}
export default customerCategoryApi;

