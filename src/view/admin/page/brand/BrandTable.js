import {Fragment, useEffect, useState} from "react";
import BrandRow from "./BrandRow";
import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {getBrands} from "../../../../core/admin/reducer/brandSlice";

const BrandTable = (props) => {
    const dispatch = useDispatch();
    const brandsSelector = useSelector(state => state.brands);
    const [brands, setBrands] = useState({
        currentBrands: [],
        itemsPerPage: 5,
        pageCount: 0,
        selectedPage: 0
    });

    useEffect(() => {
        setBrands({
            ...brands,
            currentBrands: brandsSelector.value,
            pageCount: Math.ceil(brandsSelector.brands.length / brands.itemsPerPage)
        });
        initPaginate(brands);
        dispatch(() => getBrands(brands));
    }, [brands, brandsSelector.brands.length, brandsSelector.value, dispatch]);


    const renderPagination = () => {
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

                        onPageChange={onChangePage}
                        pageRangeDisplayed={2}
                        marginPagesDisplayed={1}
                        // initialPage={selectedPage}
                        pageCount={brands.pageCount}
                        renderOnZeroPageCount={null}
                    />
                </nav>
            </div>
        )
    }
    const initPaginate = (brands) => {
        let itemsOffset = brands.selectedPage === 0 ? brands.selectedPage : brands.selectedPage * brands.itemsPerPage;

        // vị trí kết thúc
        let endOffset = itemsOffset + brands.itemsPerPage;

        setBrands({
            ...brands,
            currentBrands: brands.slice(itemsOffset, endOffset),
            pageCount: Math.ceil(brands.length / brands.itemsPerPage)
        })
    }

    const onChangePage = (event) => {

        let newOffset = (event.selected * brands.itemsPerPage) % brands.length;

        let endOffset = newOffset + brands.itemsPerPage;

        setBrands({
            ...brands,
            currentBrands: brands.slice(newOffset, endOffset),
            selectedPage: event.selected
        });
    }

    const renderBrands = () => {
        return (
            brands.currentBrands.map((brand, index) => {
                return <BrandRow key={index} brand={brand}/>
            })
        );
    }

    return (
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
                                {renderBrands()}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {renderPagination()}
        </Fragment>
    );
}

export default BrandTable;