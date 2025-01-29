import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
const Slider = () => {
  return (
    <section id="slider">
      <Carousel>
        <Carousel.Item>
          <Image
            src="https://wallpapercave.com/wp/wp8830740.jpg"
            alt=""
            className="slider__img"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://blog.playstation.com/tachyon/2022/01/5a1b94ee8548fa3391124c09f9eab6dc6838b8ef.jpg"
            alt=""
            className="slider__img"
          />
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src="https://cdn.fastly.steamstatic.com/store/home/store_home_share.jpg"
            alt=""
            className="slider__img"
          />
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Slider;
