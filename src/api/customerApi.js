import apiService from "../services/ApiService";
import productApi from "../constants/customerUrl/productApi";
import categoryApi from "../constants/customerUrl/categoryApi";


const customerApi = {
    productApi: {
        findAll() {
            return apiService.get(productApi.FIND_ALL);
        }
    },
    categoryApi: {
        findAll() {
            return apiService.get(categoryApi.FIND_ALL);
        }
    }
}

export default customerApi;

