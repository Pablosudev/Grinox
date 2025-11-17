import styled from "styled-components";

const images = [
  { src: "/img/Photos/work6.jpg", alt: "Montaje de tuberías en acero inoxidable" },
  { src: "/img/Photos/work2.jpg", alt: "Instalación de maquinaria en almazara" },
  { src: "/img/Photos/work3.jpg", alt: "Estructuras y pasarelas en inox" },
  { src: "/img/Photos/work4.jpg", alt: "Detalle de soldadura y acabado" },
  { src: "/img/Photos/work5.jpg", alt: "Depósitos y líneas de proceso" },
  { src: "/img/Photos/work1.jpg", alt: "Montaje en planta industrial" },
];

export default function WorkGallery() {
  return (
    <GallerySection>
      <GalleryTitle data-fade>ALGUNOS DE NUESTROS TRABAJOS</GalleryTitle>

      <GalleryGrid>
        {images.map((img, i) => (
          <ImageCard key={i} data-fade>
            <Img src={img.src} alt={img.alt} />
            <ImgCaption>{img.alt}</ImgCaption>
          </ImageCard>
        ))}
      </GalleryGrid>
    </GallerySection>
  );
}

// 🎨 ESTILOS

const GallerySection = styled.section`
  max-width: 1100px;
  margin: 4rem auto 5rem;
  padding: 0 2rem;
`;

const GalleryTitle = styled.h2`
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: white;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const ImageCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  position: relative;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
  }
`;

const Img = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;

  ${ImageCard}:hover & {
    transform: scale(1.05);
  }
`;

const ImgCaption = styled.div`
  padding: 0.8rem 1rem 1rem;
  font-size: 0.9rem;
  color: #333;
`;
