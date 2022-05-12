import {Component, Fragment} from "react";
import ProductRow from "./ProductRow";
import ReactPaginate from "react-paginate";

class ProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentProducts: [],
            itemsPerPage: 5,
            pageCount: 0,
            selectedPage: 0
        }

    }
    componentDidMount() {
        let {productAction} = this.props;
        productAction.fetchFindAll();
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {

        this.initPaginate(nextProps.products);
    }

    renderPagination = () => {
        let {pageCount} = this.state;
        return (
            <div className="pagination-area mt-30 mb-50">
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        containerClassName="pagination"

                        previousLabel="<"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"

                        nextLabel=">"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"

                        breakLabel="..."
                        breakClassName="page-item disabled"
                        breakLinkClassName="page-link disabled"

                        pageLinkClassName="page-link"
                        pageClassName="page-item"
                        activeClassName="active"

                        onPageChange={this.onChangePage}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        // initialPage={selectedPage}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                    />
                </nav>
            </div>
        )
    }

    initPaginate = (products) => {
        let {itemsPerPage, selectedPage} = this.state;

        let itemsOffset = selectedPage === 0 ? selectedPage : selectedPage * itemsPerPage;

        let endOffset = itemsOffset + itemsPerPage;

        this.setState({
            currentProducts: products.slice(itemsOffset, endOffset),
            pageCount: Math.ceil(products.length / itemsPerPage)
        })
    }

    onChangePage = (event) => {

        let {products} = this.props;
        let {itemsPerPage} = this.state;

        let newOffset = (event.selected * itemsPerPage) % products.length;

        let endOffset = newOffset + itemsPerPage;

        this.setState({
            currentProducts: products.slice(newOffset, endOffset),
            selectedPage: event.selected
        });
    }

    renderProducts = () => {
        let {productAction} = this.props;
        let {currentProducts} = this.state;
        return (
            currentProducts.map((product, index) => {
                return <ProductRow key={index} product={product} productAction={productAction}/>
            })
        )
    }

    render() {

        let product = {
            id: 1,
            name: "name",
            priceFormat: "1000",
            quantity: 10,
            brandName: "brand",
            category: "category",
            firstImageUrl: "124"
        };

        return (
            <Fragment>
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Sản phẩm</h2>
                        <p>Danh sách</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Hình ảnh</th>
                                        <th>Tên</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Thương hiệu</th>
                                        <th>Danh mục</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderProducts()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {this.renderPagination()}
            </Fragment>
        );
    }

}
export default ProductTable;