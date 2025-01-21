import Row from "react-bootstrap/Row";
import useFetch from "../hooks/useFetch";
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
  // TODO: Review if the code can be refactored more
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = filteredItems.slice(firstItem, lastItem);

  const handleCategory = (category) => {
    if (category === "All") {
      setFilteredItems(productList);
    } else {
      const updatedProductList = productList.filter(
        (item) => item.category === category
      );
      setFilteredItems(updatedProductList);
    }
  };

  useEffect(() => {
    if (data) {
      setProductList(data);
      setFilteredItems(data);
    }
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <>
      <h2 className="text-center text-lg-start mb-2" id="categories">
        Categories
      </h2>
      <Categories onCategoryClick={handleCategory} />
      <h2 className="text-center text-lg-start mb-2" id="products">
        Products
      </h2>
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
