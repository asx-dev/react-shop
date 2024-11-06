import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { BsCart2, BsHeart } from "react-icons/bs";

const Products = () => {
  return (
    <Container className="pb-5">
      <h1 className="text-center text-lg-start" id="products">
        # Products
      </h1>
      <Row className="row-gap-3 pb-4">
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <div className="d-flex gap-2">
                <Button
                  variant="primary"
                  className="d-flex align-items-center gap-1"
                >
                  <BsCart2 />
                  Buy
                </Button>
                <Button
                  variant="danger"
                  className="d-flex align-items-center gap-1"
                >
                  <BsHeart />
                  Save
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} lg={4}>
          <Card style={{ width: "18rem" }} className="shadow mx-auto mx-md-0">
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card content.
              </Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
