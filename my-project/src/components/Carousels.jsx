import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  margin: 10px;
`;

const CarouselImage = styled.img`
  width: 100vw;
  height: auto;
  min-height: 15vh;
`;

const ImageCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <CarouselWrapper>
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        keyBoardControl
        customTransition="all .5"
        transitionDuration={500}
      >
        <CarouselImage
          src="https://cdn1.desidime.com/merchants/1560/original/Amazon-Mega-Electrnoic-Days-sale-15-19th-Aug-DD-Full-size-1400-x-160.jpg?1692021108"
          alt="Image 1"
        />
        <CarouselImage
          src="https://cdn1.desidime.com/merchants/1556/original/1400-BY-160-MYNTRA-4.jpg?1691751010"
          alt="Image 2"
        />
        <CarouselImage
          src="https://cdn1.desidime.com/merchants/1560/original/Amazon-Mega-Electrnoic-Days-sale-15-19th-Aug-DD-Full-size-1400-x-160.jpg?1692021108"
          alt="Image 3"
        />
        <CarouselImage
          src="https://cdn2.desidime.com/merchants/1561/original/Fave-App-banner-1400-x-160.jpg?1692037695"
          alt="Image 3"
        />
      </Carousel>
    </CarouselWrapper>
  );
};

export default ImageCarousel;
