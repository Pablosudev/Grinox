import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

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
        <SwiperSlide>
          <CardMachine>
            <ContainerMachine>
              <Titleswiper>Molino triturador de aceitunas</Titleswiper>
              <DataSwiper>
                Diseñado para garantizar una trituración eficiente y homegénea
                de las aceitunas, optimizando el rendimiento en la extracción
                del aceite. Fabricado con materiales de alta resistencia y fácil
                limpieza, asegura unproceso continuo, higiénico y adapatado a
                las exigencias de las almazaras modernas.
              </DataSwiper>
              <ImgProduct src="img/Imgs/Maquina1.png" />
            </ContainerMachine>
          </CardMachine>
        </SwiperSlide>
        <SwiperSlide>
          <CardMachine>
            <ContainerMachine>
              <Titleswiper>Molino triturador de aceitunas</Titleswiper>
              <DataSwiper>
                Diseñado para garantizar una trituración eficiente y homegénea
                de las aceitunas, optimizando el rendimiento en la extracción
                del aceite. Fabricado con materiales de alta resistencia y fácil
                limpieza, asegura unproceso continuo, higiénico y adapatado a
                las exigencias de las almazaras modernas.
              </DataSwiper>
              <ImgProduct src="img/Imgs/Maquina1.png" />
            </ContainerMachine>
          </CardMachine>
        </SwiperSlide>
        <SwiperSlide>
          <CardMachine>
            <ContainerMachine>
              <Titleswiper>Molino triturador de aceitunas</Titleswiper>
              <DataSwiper>
                Diseñado para garantizar una trituración eficiente y homegénea
                de las aceitunas, optimizando el rendimiento en la extracción
                del aceite. Fabricado con materiales de alta resistencia y fácil
                limpieza, asegura unproceso continuo, higiénico y adapatado a
                las exigencias de las almazaras modernas.
              </DataSwiper>
              <ImgProduct src="img/Imgs/Maquina1.png" />
            </ContainerMachine>
          </CardMachine>
        </SwiperSlide>
      </Swiper>
    </SwiperContainer>
  );
}
const ContainerMachine = styled.div`
  background-color: white;
  padding: 5%;
  padding-top: 15%;
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
  color: black;
`;
const ImgProduct = styled.img`
  position: absolute;
  top: 1%;
  left: 25%;
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

