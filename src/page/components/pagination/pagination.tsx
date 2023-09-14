import React from "react";
import ReactPaginate from "react-paginate";
import style from "./pagination.module.css";

//@ts-ignore
const Pagination = (props) => {
  const { data } = props;

  console.log('pagination data', data)

  const [currentItems, setCurrentItems] = React.useState([]);
  const [pageCount, setPageCount] = React.useState(0);
  const [itemOffset, setItemOffset] = React.useState(0);
  const itemsPerPage = 6;

  React.useEffect(() => {
    //@ts-ignore
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    //@ts-ignore
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  //@ts-ignore
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <>

      <ReactPaginate
        className={style.pagination}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Pagination;
