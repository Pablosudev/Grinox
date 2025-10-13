import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import { MdOutlineMenu } from "react-icons/md";
import { useState } from "react";


export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Navbar>
        <Link to="/">
        <img src="img/Logos/Grinox.png" alt="LogoGrinox" />
        </Link>
        
        <ButtonMenu onClick={() => setIsOpen(true)}>
          <LogoMenu />
        </ButtonMenu>
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
    </>
  );
}

const Navbar = styled.div`
  background-color: #447aab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 4%;
  padding-right: 5%;
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
`;

const TitleFooter = styled.h1`
  text-align: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 5%;
  margin-bottom: 8%;
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
  cursor: pointer;

  &:visited {
    color: inherit;      
  }
  `;