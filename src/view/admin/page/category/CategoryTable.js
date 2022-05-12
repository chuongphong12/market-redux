import {Component, Fragment} from "react";
import * as categoryApi from "../../../../service/admin/api/categoryApi";
import CategoryRow from "./CategoryRow";
import ReactPaginate from "react-paginate";

class CategoryTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCategories: [],
            itemsPerPage: 5,
            pageCount: 0,
            selectedPage: 0
        }
    }

    componentDidMount() {
        let {categoryAction} = this.props;
        categoryAction.fetchFindAll();
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
        // if (nextProps.categories !== this.props.categories) {
            this.initPaginate(nextProps.categories);
        // }
    }

    renderPagination = () => {
        let {pageCount} = this.state;
        return (
            <div className="pagination-area mt-30 mb-50">
                <nav aria-label="Page navigation example">
                    <ReactPaginate
                        containerClassName="pagination" // bọc chính

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

    /**
     * TODO: khởi tạo phân trang
     */
    initPaginate = (categories) => {
        let {itemsPerPage, selectedPage} = this.state;

        let itemsOffset = selectedPage === 0 ? selectedPage : selectedPage * itemsPerPage;

        let endOffset = itemsOffset + itemsPerPage;

        this.setState({
            currentCategories: categories.slice(itemsOffset, endOffset),
            pageCount: Math.ceil(categories.length / itemsPerPage)
        })
    }

    /**
     * TODO: thay đổi trang khi được khi click
     * khi click vào mấy ô số trang sự kiện này sẽ được gọi
     * @param event do JS auto truyền vào
     */
    onChangePage = (event) => {

        let {categories} = this.props;
        let {itemsPerPage} = this.state;

        let newOffset = (event.selected * itemsPerPage) % categories.length;

        let endOffset = newOffset + itemsPerPage;

        this.setState({
            currentCategories: categories.slice(newOffset, endOffset),
            selectedPage: event.selected
        });
    }

    renderCategories = () => {
        let {categoryAction} = this.props;
        let {currentCategories} = this.state;
        return (
            currentCategories.map((category, index) => {
                return <CategoryRow key={index} category={category} categoryAction={categoryAction}/>
            })
        )
    }


    render() {
        return (
            <Fragment>
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Danh mục</h2>
                        <p>Thông tin Danh mục</p>
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
                                        <th>Tên</th>
                                        <th>Mô tả</th>
                                        <th className="text-end">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.renderCategories()}
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

export default CategoryTable;