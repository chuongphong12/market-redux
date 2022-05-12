import {Component, Fragment} from "react";
import * as brandApi from "../../../../service/admin/api/brandApi";
import BrandRow from "./BrandRow";
import ReactPaginate from "react-paginate";
import CategoryRow from "../category/CategoryRow";

class BrandTable extends Component{

    constructor(props) {
        super(props);
        this.state = {
            currentBrands: [],
            itemsPerPage: 5,
            pageCount: 0,
            selectedPage: 0
        }
    }

    componentDidMount() {
        let {brandAction} = this.props;
        brandAction.fetchFindAll();
    }

    componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any) {
        this.initPaginate(nextProps.brands);
    }

    renderPagination = () => {
        let {pageCount} = this.state;
        return(
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
    initPaginate = (brands) => {
        let {itemsPerPage, selectedPage} =this.state;
        let itemsOffset = selectedPage === 0 ? selectedPage : selectedPage * itemsPerPage;

        // vị trí kết thúc
        let endOffset = itemsOffset + itemsPerPage;

        this.setState({
            currentBrands: brands.slice(itemsOffset, endOffset),
            pageCount: Math.ceil(brands.length / itemsPerPage)
        })
    }

    onChangePage = (event) => {

        let {brands} = this.props;
        let {itemsPerPage} = this.state;

        let newOffset = (event.selected * itemsPerPage) % brands.length;

        let endOffset = newOffset + itemsPerPage;

        this.setState({
            currentBrands: brands.slice(newOffset, endOffset),
            selectedPage: event.selected
        });
    }

    renderBrands = () =>{
        let {brandAction} = this.props;
        let {currentBrands} = this.state;
        return (
            currentBrands.map((brand, index) => {
                return <BrandRow key={index} brand={brand} brandAction={brandAction}/>
            })
        );
    }


    render() {
        return(
            <Fragment>
                <div className="content-header">
                    <div>
                        <h2 className="content-title card-title">Thương hiệu</h2>
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
                                    {this.renderBrands()}
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

export default BrandTable;