import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";



export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
    <Layaout>
      <Navbar>
        <Link to="/">
        <LogoGrinox src="img/Logos/Grinox.png" alt="LogoGrinox" />
        </Link>
        
        <ButtonMenu onClick={() => setIsOpen(true)}>
          <LogoMenu />
        </ButtonMenu>
        <SecondNav>
          <List>
            <StyledLink>
            INICIO
            </StyledLink>
            <StyledLink>
            MANTENIMIENTO
            </StyledLink>
             <StyledLink>
            SERVICIOS
            </StyledLink>
             <StyledLink>
            CONTACTO
            </StyledLink>
            {/* <GrinoxImg src="img/Logos/GR.png"/> */}
          </List>
        </SecondNav>
      </Navbar>
      {isOpen && <Overlay onClick={closeMenu} />}
      <MenuDrop id="menu-drop" $open={isOpen}>
        <StyledLink href="/montaje"><TitleDrop>MONTAJE</TitleDrop></StyledLink>
        <StyledLink href="/mantenimiento"><TitleDrop>MANTENIMIENTO</TitleDrop></StyledLink>
        <StyledLink href="/servicios"><TitleDrop>SERVICIOS</TitleDrop></StyledLink>
        <StyledLink href="/contacto"><TitleDrop>CONTACTO</TitleDrop></StyledLink>
      </MenuDrop>
      <Outlet />
      <Footer>
        <TitleFooter>
          CONTACTA CON <br />
          NOSOTROS
        </TitleFooter>
        <FooterLogo src="img/Logos/Phone.png" alt="PhoneLogo" />
        <ContainerPhone>
          <p>678574652</p>
          <img src="img/Logos/Gear.png" alt="GearLogo" />
          <p>662543947</p>
        </ContainerPhone>
        <FooterLogo src="img/Logos/Mail.png" alt="MailLogo" />
        <p>grinoxindustrial@gmail.com</p>
        <FooterLogo src="img/Logos/Ubi.png" alt="UbiLogo" />
        <UbiInfo>
          Polígono la Fuenblanquilla <br /> parcela 5-3-1 <br /> 14650 Bujalance
          (Córdoba)
        </UbiInfo>
      </Footer>
      <FooterDesk>
        <FooterBack src="img/Backgrounds/olivo.png"/>
        <TitleFooter>CONTACTA CON NOSOTROS, HEMOS REALIZADO <br /> INTERVENCIONES POR TODO EL MUNDO</TitleFooter>
        <div>
          <div>
            <ul>
              <li><PhoneLogo/>678574652/662543947</li>
              <li><MailLogo/>grinoxindustrial@gmail.com</li>
              <li><UbiLogo/>Polígono la Fuenblanquilla parecela 5-3-1 14650 Bujalance (Córdoba)</li>
            </ul>
          </div>

          <img src=""  />
        </div>
      </FooterDesk>
    </Layaout>
    
    </>
  );
}


const Layaout= styled.div`
`;
const Navbar = styled.div`
  background-color: #447aab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 4%;
  padding-right: 5%;
  @media screen and (min-width: 723px){
    padding-top: 1%;
    padding-bottom: 1%;
  }
`;
const SecondNav = styled.div`
  display: none;
  @media screen and (min-width: 723px){
    background-color: #4B4545;
    display: block;
    position: absolute;
    width: 70%;
    right: 5%;
    top: 6%;
    padding-top: 2%;
    padding-bottom: 2%;
    z-index: 1;
  }
`;
const LogoGrinox = styled.img`
  @media screen and (min-width: 500px){
    object-fit: contain;
    width: 10rem;
  }
`;
const LogoMenu = styled(MdOutlineMenu)`
  width: 1.2rem;
  height: 1.2rem;
`;
const ButtonMenu = styled.button`
  height: 2.2rem;
  width: 2.2rem;
  background-color: #447aab;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
  @media screen and (min-width: 723px){
    display: none;
  }
`;
const Footer = styled.div`
  background-color: #447aab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 15%;
  padding-top: 10%;
@media screen and (min-width: 723px){
  display: none;  
}
`;

const TitleFooter = styled.h1`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 5%;
  margin-bottom: 8%;
  @media screen and (min-width: 1024px){
    font-size: 2.5rem;
  }
`;
const ContainerPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6%;
  margin-bottom: 6%;
`;
const FooterLogo = styled.img`
  margin-top: 3%;
  margin-bottom: 3%;
  height: 4rem;
`;
const UbiInfo = styled.p`
  text-align: center;
`;
const MenuDrop = styled.div`
  position: fixed;
  top: 10%;
  width: 100%;
  padding-bottom: 5%;
  background: #447aab;
  border-radius: 12px;
  padding: 12px 16px;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.35);
  z-index: 10;
  transform: translateY(${({ $open }) => ($open ? "0" : "-10px")});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 180ms ease, transform 180ms ease;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 9;
`;
const TitleDrop = styled.h1`
  font-size: 1rem;
  font-weight: 200;
  text-align: center;
  margin-top:4%;
`;
const StyledLink = styled.a`
  text-decoration: none; 
  color: inherit;     
  font-size: 1.1rem;   
  font-weight: 400;
  cursor: pointer;

  &:visited {
    color: inherit;      
  }
  `;

const List = styled.div`
  
  @media screen and (min-width: 723px){
    display: flex;
    justify-content:space-around;
    align-items: center;
    font-size: 0.9rem;
  }
`;
const GrinoxImg = styled.img`
    object-fit: contain;
    width: 6rem;
    opacity: 70%;
`;

const FooterDesk = styled.div`
  display:none;
   @media screen and (min-width: 723px){
    display: block;
    padding-top: 7%;
   }
`;
const FooterBack = styled.img`
  background-position: center; 
  background-size: cover;   
  min-width: 100%;
  position: fixed;
  object-fit: contain;
`;
const UbiLogo = styled(HiMapPin)`

`;
const MailLogo = styled(IoIosMail )`

`;
const PhoneLogo = styled(FaPhoneAlt)`

`;