import categoryApi from "../constants/customerUrl/categoryApi";
import productApi from "../constants/customerUrl/productApi";
import apiService from "../services/ApiService";


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

