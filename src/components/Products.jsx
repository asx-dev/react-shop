import Row from "react-bootstrap/Row";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Categories from "../components/Categories";
import PaginationTabs from "../components/PaginationTabs";
import { useState, useEffect } from "react";
const Products = () => {
  const API_URL = "http://localhost:3000/products";
  const { data, isLoading } = useFetch(API_URL);
  const [productList, setProductList] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { totalPages, currentItems } = usePagination(
    filteredItems,
    currentPage
  );

  useEffect(() => {
    if (data) {
      setProductList(data);
      setFilteredItems(data);
    }
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <>
      <h2 className="text-center text-lg-start mb-2">Categories</h2>
      <Categories
        originalProducts={productList}
        onFilterChange={setFilteredItems}
      />
      <h2 className="text-center text-lg-start mb-2">Products</h2>
      <Row className="row-gap-3">
        {currentItems.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Row>
      <PaginationTabs
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
