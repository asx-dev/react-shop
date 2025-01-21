import Pagination from "react-bootstrap/Pagination";

const PaginationTabs = ({ totalPages, currentPage, setCurrentPage }) => {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  return <Pagination>{items}</Pagination>;
};

export default PaginationTabs;
