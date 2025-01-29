import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
const Slider = () => {
  return (
    <section id="slider">
      <Carousel>
        <Carousel.Item>
          <div className="video__wrapper">
            <Image
              src="https://wallpapers.com/images/featured/dead-space-4k-llgpz7imy78r284d.jpg"
              alt=""
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://pbs.twimg.com/media/EdiF-I4UEAAkbaj.jpg:large"
            alt=""
            style={{
              height: "500px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://zelda.nintendo.com/breath-of-the-wild/assets/media/wallpapers/desktop-1.jpg"
            alt=""
            style={{
              height: "500px",
              width: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;
