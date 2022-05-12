/**
 * thêm đầu mảng
 *
 * @param items
 * @param item
 */
export function addFirst(items = [], item) {
    item.id = items.length + 1;
    items.unshift(item);
    return items;
}

/**
 * xóa theo id
 *
 * @param items
 * @param id
 */
export function deleteById(items = [], id) {
    return items.filter(item => item.id !== id)
}

/**
 * cập nhật theo id
 *
 * @param items
 * @param id
 * @param newItem
 */
export function updateById(items = [], id, newItem)
{
    let index = items.indexOf(findById(items, id));

    if (index !== -1) {
        items[index] = newItem;
    }

    return items;
}

/**
 *
 * @param items
 * @param id
 */
export function findById(items = [], id) {
    return items.find(item => item.id === id);
}

/**
 *
 * @param ms
 * @returns {Promise<unknown>}
 */
export function sleep(ms = 1000) {
    console.log("SLEEP FOR " + ms)
    return new Promise(resolve => setTimeout(resolve, ms));
}
