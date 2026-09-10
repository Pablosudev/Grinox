import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { FiArrowUpRight, FiFileText } from "react-icons/fi";
import { HiMapPin } from "react-icons/hi2";
import { IoIosMail } from "react-icons/io";
import styled from "styled-components";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <SiteLayout>
      <DesktopHeader />
      <MobileHeader />
      <Outlet />
      <SiteFooter>
        <div className="footer-inner">
          <h2>Intervenimos en todo el mundo.<br />¿Hablamos de tu proyecto?</h2>
          <div className="footer-grid">
            <address className="footer-contact">
              <div><FaPhoneAlt aria-hidden="true" /><p><a href="tel:+34678574652">678 574 652</a><span>/</span><a href="tel:+34662543947">662 543 947</a></p></div>
              <div><IoIosMail aria-hidden="true" /><a href="mailto:grinoxindustrial@gmail.com">grinoxindustrial@gmail.com</a></div>
              <div><HiMapPin aria-hidden="true" /><p>Polígono la Fuenblanquilla, parcela 5-3-1<br />14650 Bujalance (Córdoba)</p></div>
            </address>

            <section className="footer-credentials" aria-labelledby="footer-certificates-title">
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
            </section>
          </div>
          <div className="footer-bottom"><span>GRINOX MONTAJE INDUSTRIAL S.L.</span><Link to="/contacto">Contacto <FiArrowUpRight aria-hidden="true" /></Link></div>
        </div>
      </SiteFooter>
    </SiteLayout>
  );
}

const SiteLayout = styled.div`
  min-height: 100vh;
`;

const SiteFooter = styled.footer`
  background: #142b3c;
  color: #d3dfe7;
  padding: 50px 6% 28px;

  .footer-inner { width: min(1240px, 100%); margin-inline: auto; }
  h2 { color: #fff; font-size: 23px; font-weight: 500; line-height: 1.35; letter-spacing: -.03em; margin-bottom: 30px; }
  h2 br { display: none; }
  .footer-grid { display: flex; justify-content: space-between; align-items: flex-start; gap: 48px; }
  .footer-contact { flex: 1; display: grid; gap: 16px; font-style: normal; }
  .footer-contact > div { display: flex; align-items: flex-start; gap: 12px; font-size: 12px; line-height: 1.8; }
  .footer-contact svg { width: 22px; height: 22px; color: #8fc7eb; flex-shrink: 0; }
  .footer-contact p { margin: 0; }
  .footer-contact a { overflow-wrap: anywhere; }
  .footer-contact p span { margin-inline: 7px; color: #7891a2; }
  a { color: inherit; text-decoration: none; }
  a:hover { color: #fff; }
  a:focus-visible { outline: 2px solid #8fc7eb; outline-offset: 5px; }
  .footer-credentials { width: 365px; max-width: 100%; flex-shrink: 0; }
  .footer-credentials h3 { color: #a9bfce; font-size: 10px; font-weight: 500; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 16px; }
  .footer-bottom { display: none; align-items: center; justify-content: space-between; gap: 20px; border-top: 1px solid #ffffff1f; padding-top: 22px; margin-top: 34px; color: #91a9b8; font-size: 9px; letter-spacing: .1em; }
  .footer-bottom a { display: inline-flex; align-items: center; gap: 10px; color: #d3dfe7; letter-spacing: 0; font-size: 11px; }

  @media (max-width: 950px) {
    .footer-grid { flex-direction: column; gap: 28px; }
    .footer-credentials { width: 100%; }
  }

  @media (max-width: 722px) {
    padding: 48px 20px 24px;
    h2 { font-size: 26px; line-height: 1.28; margin-bottom: 34px; }
    h2 br { display: initial; }
    .footer-grid { gap: 38px; }
    .footer-contact { width: 100%; gap: 0; }
    .footer-contact > div { min-height: 60px; padding-block: 16px; border-top: 1px solid #ffffff1f; font-size: 13px; }
    .footer-contact svg { width: 18px; height: 18px; margin-top: 2px; }
    .footer-contact > div:last-child { border-bottom: 1px solid #ffffff1f; }
    .footer-contact p { min-width: 0; }
    .footer-contact p span { display: none; }
    .footer-contact p a { display: block; }
    .footer-credentials h3 { margin-bottom: 12px; }
    .footer-bottom { display: flex; align-items: flex-start; margin-top: 28px; }
  }
`;

const FooterCert = styled(Link)`
  display: grid;
  grid-template-columns: 55px minmax(0, 1fr) 18px;
  align-items: center;
  gap: 18px;
  min-height: 76px;
  padding: 14px 0;
  border-top: 1px solid #ffffff26;
  color: #edf3f7;
  text-decoration: none;
  .cert-acronym { display: grid; place-items: center; height: 45px; border: 1px solid #ffffff35; border-radius: 3px; font-size: 16px; font-weight: 500; letter-spacing: .06em; }
  .cert-description { display: grid; gap: 5px; font-size: 13px; }
  small { display: flex; align-items: center; gap: 6px; color: #a9bfce; font-size: 10px; }
  small svg { width: 12px; height: 12px; }
  .cert-arrow { color: #8fc7eb; width: 18px; height: 18px; }
  &:hover { color: #8fc7eb; border-color: #8fc7eb; }
  &:hover .cert-acronym { border-color: #8fc7eb; }
`;
