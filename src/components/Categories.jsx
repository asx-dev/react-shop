import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Categories = ({ originalProducts, onFilterChange }) => {
  const categories = [
    { name: "All", logo: "unreal.svg" },
    { name: "PC", logo: "unity.svg" },
    { name: "Playstation", logo: "playstation.svg" },
    { name: "Xbox", logo: "xbox.svg" },
    { name: "Windows", logo: "windows.svg" },
    { name: "Steam", logo: "steam.svg" },
  ];

  const handleCategory = (category) => {
    if (category === "All") {
      onFilterChange(originalProducts);
    } else {
      const updatedProductList = originalProducts.filter(
        (item) => item.category === category
      );
      onFilterChange(updatedProductList);
    }
  };

  return (
    <section className="section" id="categories">
      <h2 className="text-center mb-4">Categories</h2>
      <Row className="g-2">
        {categories.map((category) => {
          return (
            <Col
              xs={6}
              sm={3}
              md={3}
              lg={2}
              key={category.name}
              onClick={() => handleCategory(category.name)}
              className="d-flex flex-column align-items-center gap-2 category__button"
            >
              <Image src={category.logo} className="category__logo" />
              <h5 className="text-center">{category.name}</h5>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default Categories;
