import Row from "react-bootstrap/Row";
import useFetch from "../hooks/useFetch";
import usePagination from "../hooks/usePagination";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import Categories from "../components/Categories";
import PaginationTabs from "../components/PaginationTabs";
import { useState, useEffect } from "react";
const Products = () => {
  const { data, isLoading } = useFetch(import.meta.env.VITE_SHOP_API);
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
      <Categories
        originalProducts={productList}
        onFilterChange={setFilteredItems}
      />
      <section className="section" id="products">
        <h2 className="text-center text-lg-start mb-4">Products</h2>
        <Row className="g-3 mb-3">
          {currentItems.length === 0 && (
            <h3 className="text-center">😥 No products found</h3>
          )}
          {currentItems.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </Row>
        <PaginationTabs
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
    </>
  );
};

export default Products;
