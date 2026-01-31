import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";
import maquinas from "../../jsonCards.json";

export default function SliderMachine() {
  return (
    <SwiperContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 50000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        style={{ marginBottom: "4rem", marginTop: "2rem" }}
      >
        {maquinas.map((res) => {
          return (
            <SwiperSlide>
              <CardMachine>
                <ContainerMachine>
                  <Titleswiper>{res.name}</Titleswiper>
                  <DataSwiper>{res.info}</DataSwiper>
                    <ImgProduct src={res.imagen} />
                </ContainerMachine>
              </CardMachine>
            </SwiperSlide>
          );
        })}
    
      
      </Swiper>
    </SwiperContainer>
  );
}
const ContainerMachine = styled.div`
  background-color: white;
  padding: 5%;
  padding-top: 10%;
  border-radius: 8px;
`;
const Titleswiper = styled.h1`
  color: #447aab;
  text-align: center;
  font-size: 1.2rem;
`;
const DataSwiper = styled.p`
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  margin-top: 5%;
  color: black;
`;

const ImgProduct = styled.img`
  width: 19rem;
  position: absolute;
  top: 1%;
  right: 2%;
`;
const CardMachine = styled.div`
  position: relative;
  padding-top: 40%;
  padding-left: 5%;
  padding-right: 5%;
`;
const SwiperContainer = styled.div`
  position: relative;

  /* ==== Paginación ==== */
  .swiper-pagination {
    position: relative !important;
    margin-top: 2rem;
    text-align: center;
  }

  .swiper-pagination-bullet {
    background: white !important;
    opacity: 0.6;
    width: 10px;
    height: 10px;
    margin: 0 6px !important;
  }

  .swiper-pagination-bullet-active {
    background: white !important;
    opacity: 1;
  }

  /* Oculta flechas si existieran */
  .swiper-button-prev,
  .swiper-button-next {
    display: none !important;
  }
`;
