import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
const Products = () => {
  const API_URL = "http://localhost:3000/products";
  const { data, isLoading } = useFetch(API_URL);
  const [productList, setProductList] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  // TODO: Pagination refactor into a separate component
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  let items = [];
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = filteredItems.slice(firstItem, lastItem);
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
  // TODO: Categories refator into a separate component
  const categories = [
    { name: "All", id: 1 },
    { name: "Technology", id: 2 },
    { name: "Cars", id: 3 },
    { name: "Audio", id: 4 },
    { name: "Music", id: 5 },
    { name: "Games", id: 6 },
  ];
  const handleCategoryClick = (category) => {
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
      <Row>
        {categories.map((category) => {
          return (
            <Col
              xs={4}
              sm={3}
              md={2}
              lg={2}
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Image
                src="https://picsum.photos/300/300"
                roundedCircle
                className="product-image"
              />
              <h5 className="text-center">{category.name}</h5>
            </Col>
          );
        })}
      </Row>
      <h2 className="text-center text-lg-start mb-2" id="products">
        Products
      </h2>
      <Row className="row-gap-3">
        {currentItems.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </Row>
      <Pagination className="mt-4">{items}</Pagination>
    </>
  );
};

export default Products;
