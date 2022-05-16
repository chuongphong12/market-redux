import axios from "axios";

class ApiService {

    constructor() {
        this.instance = axios.create();
        this.instance.interceptors.response.use(this.success, this.error);
    }

    success(response) {
        return response;
    }

    error(error) {
        return error;
    }

    get(url) {
        return this.instance.get(url);
    }

    delete(url) {
        return this.instance.delete(url)
    }

    post(url, data) {
        return this.instance.post(url, data);
    }

}

export default new ApiService();