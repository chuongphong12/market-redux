import {Component} from "react";

class ProductRow extends Component {
    render() {
        let {product} = this.props;

        return (
            <tr>
                <td>{product.id}</td>
                <td>
                    <img className="c-w-50"
                         src={product.firstImageUrl} alt="productImg"/>
                </td>

                <td>{product.name}</td>
                <td>{product.priceFormat}</td>
                <td>{product.quantity}</td>
                <td>{product.brandName}</td>
                <td>{product.category}</td>

                <td className="text-end">
                    <button className="btn btn-sm font-sm rounded btn-brand c-mg-r-5">
                        <i className="material-icons md-edit"/>Sửa
                    </button>
                    <button className="btn btn-sm font-sm btn-light rounded">
                        <i className="material-icons md-delete_forever"/>Xóa
                    </button>
                </td>
            </tr>

        );
    }


}
export default ProductRow;