import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

export default function SliderWorks() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false, 
      }}
      navigation
      // pagination={{ clickable: true }}
      style={{ marginBottom: "1rem" }}
    >
      <SwiperSlide>
        <SlideImage src="img/Photos/work1.jpg" alt="slide1" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="img/Photos/work2.jpg" alt="slide2" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="img/Photos/work3.jpg" alt="slide3" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="img/Photos/work4.jpg" alt="slide4" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="img/Photos/work5.jpg" alt="slide5" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideImage src="img/Photos/work6.jpg" alt="slide6" />
      </SwiperSlide>
    </Swiper>
  );
}
const SlideImage = styled.img`
  width: 100%;         
  height: 20rem;       
  display: block;
  margin: 0 auto;     
  object-fit: contain;
  
`;