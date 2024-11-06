import { Carousel, Image } from "react-bootstrap";
const Slider = () => {
  return (
    <>
      <Carousel className="mb-3">
        <Carousel.Item>
          <Image
            src="https://images.unsplash.com/photo-1615494937387-40ae92370e2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            src="https://images.unsplash.com/photo-1615494937387-40ae92370e2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://images.unsplash.com/photo-1615494937387-40ae92370e2d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            style={{ height: "500px", width: "100%", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
