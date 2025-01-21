import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const Categories = ({ onCategoryClick }) => {
  const categories = [
    { name: "All", id: 1 },
    { name: "Technology", id: 2 },
    { name: "Cars", id: 3 },
    { name: "Audio", id: 4 },
    { name: "Music", id: 5 },
    { name: "Games", id: 6 },
  ];

  return (
    <Row>
      {categories.map((category) => {
        return (
          <Col
            xs={4}
            sm={3}
            md={2}
            lg={2}
            key={category.id}
            onClick={() => onCategoryClick(category.name)}
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
  );
};

export default Categories;
