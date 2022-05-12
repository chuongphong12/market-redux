import * as actionType from "../constant/actionType/categoryActionType";

/**
 * set list categories trên store
 */
export const setCategories = (categories) => {
    return {
        type: actionType.SET_CATEGORIES,
        payload: categories
    }
}

/**
 * dùng để gọi api
 * dùng cho categorySaga
 */
export const fetchFindAll = () => {
    return {
        type: actionType.FETCH_FIND_ALL
    }
}

// khi action nay dc goi noó seẽ truyenênền len categorySaga cuụ theêể laà goi hamàm fetchDeleteById trong categorySaga
// giongôngống trigger sao ? t dang doc ki lai
/**
 * luồn hoạt đông như sau:
 * 1. khi user bấm vào nút delete bên cái row
 * 2. nó mở form
 * 3. user bấm xác nhận (gọi action fetchDeleteById là cái hàm này á)
 * 4. cái hàm này nó như trigger nó sẽ gọi lên mainSaga
 * 5. mainSaga sẽ dựa vào cái actionType rồi gọi tiếp saga tương ứng với cái actionTYpe
 * 6. đối với hàm này nó sẽ gọi categorySage -> function fetchDeleteById
 * 7. trong hàm fetchDeleteById nó sẽ dùng sage effect cụ thể là call(categoryApi.deleteById, payload) (payload as id)
 * 8. gọi thành công trả về cái response
 * 9. trong response trả về có status
 * 10. status === 200 là xóa thành công, khác là lỗi
 * 11. dùng common.deleteById để xóa cái item thay vì gọi là api findAll rồi set lại list
 */
export const fetchDeleteById = (id) => {
    return {
        type: actionType.FETCH_DELETE_BY_ID,
        payload: id
    }
}
