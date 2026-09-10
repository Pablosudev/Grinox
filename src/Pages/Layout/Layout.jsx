import { Outlet, Link, useLocation } from "react-router-dom";
import { initFadeObserver } from "../Components/Observer";
import styled from "styled-components";
import { MdOutlineMenu } from "react-icons/md";
import { useEffect, useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FiFileText, FiArrowUpRight } from "react-icons/fi";
import DesktopHeader from "./DesktopHeader";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    return initFadeObserver();
  }, [pathname]);
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => {
      const thresholdPx = window.innerHeight * 0.03;
      setScrolled(window.scrollY > thresholdPx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Layaout>
        <DesktopHeader />
        <Navbar>
          <Link to="/">
            <LogoGrinox src="img/Logos/Grinox.png" alt="LogoGrinox" />
          </Link>

          <ButtonMenu onClick={() => setIsOpen(true)} $scrolled={scrolled}>
            <LogoMenu />
          </ButtonMenu>
          <SecondNav $scrolled={scrolled}>
            <List>
              <StyledLink href="/">INICIO</StyledLink>
              <StyledLink href="/servicios">SERVICIOS</StyledLink>
              <StyledLink href="/montaje">MONTAJE</StyledLink>
              <StyledLink href="/mantenimiento">MANTENIMIENTO</StyledLink>
              <StyledLink href="/contacto">CONTACTO</StyledLink>
            </List>
          </SecondNav>
        </Navbar>
        {/* Menu Móvil */}
        {isOpen && <Overlay onClick={closeMenu} />}
        <MenuDrop id="menu-drop" $open={isOpen}>
          <StyledLink href="/">
            <TitleDrop>INICIO</TitleDrop>
          </StyledLink>
          <StyledLink href="/servicios">
            <TitleDrop>SERVICIOS</TitleDrop>
          </StyledLink>
          <StyledLink href="/montaje">
            <TitleDrop>MONTAJE</TitleDrop>
          </StyledLink>
          <StyledLink href="/mantenimiento">
            <TitleDrop>MANTENIMIENTO</TitleDrop>
          </StyledLink>
          
          <StyledLink href="/contacto">
            <TitleDrop>CONTACTO</TitleDrop>
          </StyledLink>
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
            Polígono la Fuenblanquilla <br /> parcela 5-3-1 <br /> 14650
            Bujalance (Córdoba)
          </UbiInfo>
        </Footer>
        <FooterDesk>

          <TitleFooter as="h2">
            Intervenimos en todo el mundo. ¿Hablamos de tu proyecto?
          </TitleFooter>
          <FooterInfo>
            <FooterColumns>
              <ul>
                <li>
                  <PhoneLogo /> <a href="tel:+34678574652">678 574 652</a> / <a href="tel:+34662543947">662 543 947</a>
                </li>
                <li>
                  <MailLogo /> <a href="mailto:grinoxindustrial@gmail.com">grinoxindustrial@gmail.com</a>
                </li>
                <li>
                  <UbiLogo /> Polígono la Fuenblanquilla, parcela 5-3-1
                  <br />
                  14650 Bujalance (Córdoba)
                </li>
              </ul>
            </FooterColumns>

            <FooterCredentials aria-labelledby="footer-certificates-title">
              <h3 id="footer-certificates-title">Documentación y certificados</h3>
              <FooterCert to="/iso" aria-label="Consultar certificado ISO">
                <span className="cert-acronym">ISO</span>
                <span className="cert-description"><span>Certificado ISO</span><small><FiFileText aria-hidden="true" /> Consultar documento</small></span>
                <FiArrowUpRight className="cert-arrow" aria-hidden="true" />
              </FooterCert>
              <FooterCert to="/rea" aria-label="Consultar certificado REA">
                <span className="cert-acronym">REA</span>
                <span className="cert-description"><span>Certificado REA</span><small><FiFileText aria-hidden="true" /> Consultar documento</small></span>
                <FiArrowUpRight className="cert-arrow" aria-hidden="true" />
              </FooterCert>
            </FooterCredentials>
          </FooterInfo>
        </FooterDesk>
      </Layaout>
    </>
  );
}

const Layaout = styled.div``;
const Navbar = styled.div`
  background-color: #447aab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 4%;
  padding-right: 5%;
  @media screen and (min-width: 723px) {
    display: none;
  }
`;
const SecondNav = styled.div`
  display: none;
  @media screen and (min-width: 723px) {
    background-color: #4b4545;
    opacity: ${({ $scrolled }) => ($scrolled ? 0.6 : 1)};
    border-radius: 5px;
    display: block;
    position: fixed;
    width: 70%;
    right: 5%;
    top: 3vh;
    transition: top 220ms ease, opacity 180ms ease, background-color 180ms ease;
    padding-top: 2%;
    padding-bottom: 2%;
    z-index: 9999;
    &:hover {
      opacity: 1;
    }
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }
`;
const LogoGrinox = styled.img`
  @media screen and (min-width: 500px) {
    object-fit: contain;
    width: 10rem;
  }
`;
const LogoMenu = styled(MdOutlineMenu)`
  width: 1.2rem;
  height: 1.2rem;
`;
const ButtonMenu = styled.button`
  position: fixed;
  height: 2.2rem;
  width: 2.2rem;
  right: 5%;
  background-color: #447aab;
  opacity: ${({ $scrolled }) => ($scrolled ? 0.8 : 1)};
  transition: top 220ms ease, opacity 180ms ease, background-color 180ms ease;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  &:hover{
    opacity: 1;
  }
  @media screen and (min-width: 723px) {
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
  @media screen and (min-width: 723px) {
    display: none;
  }
`;

const TitleFooter = styled.h1`
  position: relative;
  z-index: 2;
  color: white;
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  padding-top: 5%;
  line-height: 1.2;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    font-size: 2rem;
    text-align: center;
  }
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 1%;
`;
const FooterColumns = styled.div`
  position: relative;
  z-index: 2;
  color: black;
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-size: 1.5rem;
      margin-left: 5%;
      margin-bottom: 1rem;
      font-weight: 400;
    }
  }
`;
const FooterCredentials = styled.section`
  width: 365px;
  max-width: 100%;
  flex-shrink: 0;
  h3 {
    color: #a9bfce;
    font-size: 10px;
    font-weight: 500;
    letter-spacing: .14em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  @media (max-width: 950px) {
    width: 100%;
    margin-top: 8px;
  }
`;
const FooterCert = styled(Link)`
  display: grid;
  grid-template-columns: 55px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 18px;
  padding: 17px 0;
  border-top: 1px solid #ffffff26;
  color: #edf3f7;
  text-decoration: none;
  transition: border-color .2s, color .2s;
  .cert-acronym {
    display: grid;
    place-items: center;
    height: 45px;
    border: 1px solid #ffffff35;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: .06em;
  }
  .cert-description { display: grid; gap: 5px; font-size: 13px; }
  small { display: flex; align-items: center; gap: 6px; color: #a9bfce; font-size: 10px; }
  small svg { width: 12px; height: 12px; }
  .cert-arrow { color: #8fc7eb; width: 18px; height: 18px; }
  &:hover { color: #8fc7eb; border-color: #8fc7eb; }
  &:hover .cert-acronym { border-color: #8fc7eb; }
  &:focus-visible { outline: 2px solid #8fc7eb; outline-offset: 5px; }
  @media (prefers-reduced-motion: reduce) { transition: none; }
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
  height: auto;
  width: 70%;
  right: 0%;
  padding-bottom: 5%;
  background: #447aab;
  border-radius: 12px;
  padding: 12px 16px;
  padding-bottom: 10%;
  box-shadow: 12px 12px 24px rgba(0, 0, 0, 0.35);
  z-index: 999;
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
  margin-top: 10%;
`;
const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  &:visited {
    color: inherit;
  }
`;

const List = styled.div`
  @media screen and (min-width: 723px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.7rem;
  }
  @media screen and (min-width: 523px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.6rem;
  }
`;
const GrinoxImg = styled.img`
  object-fit: contain;
  width: 6rem;
  opacity: 70%;
`;

const FooterDesk = styled.div`
  display: none;
  @media screen and (min-width: 723px) {
    display: block;
    background: #142b3c;
    padding: 50px 6%;
    ${TitleFooter} { font-size: 23px; font-weight: 500; text-align: left; padding: 0; margin: 0 auto 30px; max-width: 1240px; }
    ${FooterInfo} { max-width: 1240px; margin: auto; justify-content: space-between; gap: 48px; align-items: flex-start; }
    ${FooterColumns} { background: transparent; color: #d3dfe7; padding: 0; flex: 1; }
    ${FooterColumns} ul li { margin-left: 0; font-size: 12px; line-height: 1.8; gap: 10px; flex-wrap: wrap; }
    ${FooterColumns} a { color: inherit; text-decoration: none; }
    ${FooterColumns} a:hover { text-decoration: underline; }
    ${FooterColumns} svg { flex-shrink: 0; margin-bottom: 0; }
  }
  @media (min-width: 723px) and (max-width: 950px) {
    ${FooterInfo} { flex-direction: column; gap: 25px; }
  }
`;

const UbiLogo = styled(HiMapPin)`
  font-size: 1.5rem;
  margin-bottom: 15%;
`;
const MailLogo = styled(IoIosMail)`
  font-size: 1.5rem;
`;
const PhoneLogo = styled(FaPhoneAlt)`
  font-size: 1.5rem;
`;
