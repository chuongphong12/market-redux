export const menuItems = [

    {
        url: "/admin/dashboard",
        title: "Dashboard",
        isExact: false,
        menuClassIcon: "icon material-icons md-home",
        subMenuItems: []
    },
    {
        url: "/admin/category/**",
        title: "Danh mục",
        isExact: false,
        menuClassIcon: "icon material-icons md-shopping_bag",
        subMenuItems: [
            {
                url: "/admin/category/list",
                title: "Danh sách",
                isExact: false
            },
            {
                url: "/admin/category/add",
                title: "Thêm mới",
                isExact: false
            }
        ]
    },
    {
        url: "/admin/brand/**",
        title: "Thương hiệu",
        isExact: false,
        menuClassIcon: "icon material-icons md-stars",
        subMenuItems: [
            {
                url: "/admin/brand/list",
                title: "Danh sách",
                isExact: false
            },
            {
                url: "/admin/brand/add",
                title: "Thêm mới",
                isExact: false
            }
        ]
    },

    {
        url: "/admin/product/**",
        title: "Sản phẩm",
        isExact: false,
        menuClassIcon: "icon material-icons md-add_box",
        subMenuItems: [
            {
                url: "/admin/product/list",
                title: "Danh sách",
                isExact: false
            },
            {
                url: "/admin/product/add",
                title: "Thêm mới",
                isExact: false
            }
        ]
    },
    {
        url: "/admin/customer/**",
        title: "Khách hàng",
        isExact: false,
        menuClassIcon: "icon material-icons md-person",
        subMenuItems: []
    },
    {
        url: "/admin/order/**",
        title: "Đơn hàng",
        isExact: false,
        menuClassIcon: "icon material-icons md-shopping_cart",
        subMenuItems: [
            {
                url: "/admin/order/list",
                title: "Danh sách",
                isExact: false
            },
            {
                url: "/admin/order/add",
                title: "Thêm mới",
                isExact: false
            }
        ]
    },
    {
        url: "/admin/statistical/**",
        title: "Thống kê",
        isExact: false,
        menuClassIcon: "icon material-icons md-pie_chart",
        subMenuItems: []
    }


];