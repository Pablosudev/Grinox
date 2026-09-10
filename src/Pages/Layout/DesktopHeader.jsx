import { NavLink, Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

export default function DesktopHeader() {
  return <Header><div className="header-inner"><Link className="brand" to="/" aria-label="Grinox — Inicio"><img src="/img/Logos/Grinox.png" alt="Grinox" /><span>MONTAJE INDUSTRIAL</span></Link><nav aria-label="Navegación principal"><NavLink to="/" end>Inicio</NavLink><NavLink to="/servicios">Servicios</NavLink><NavLink to="/montaje">Montaje</NavLink><NavLink to="/mantenimiento">Mantenimiento</NavLink><NavLink to="/contacto" className="header-contact">Hablemos <FiArrowUpRight aria-hidden="true" /></NavLink></nav></div></Header>;
}

const Header = styled.header`
  display: none;
  @media (min-width: 723px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 100;
    background: #fff;
    border-bottom: 1px solid #e3e9ee;
    color: #172c3d;
    .header-inner { width: min(1240px, 88%); margin: auto; min-height: 94px; display: flex; align-items: center; justify-content: space-between; gap: 26px; }
    a { text-decoration: none; color: inherit; }
    a:focus-visible { outline: 3px solid #3178ab; outline-offset: 5px; }
    .brand { display: flex; flex-direction: column; align-items: center; gap: 4px; flex-shrink: 0; }
    .brand img { display: block; width: 138px; height: 48px; object-fit: contain; }
    .brand span { display: none; }
    nav { display: flex; align-items: center; gap: clamp(18px, 2.5vw, 38px); }
    nav a { font-size: 12px; padding-block: 10px; }
    nav a.active:not(.header-contact), nav a:hover { color: #3178ab; }
    nav a.active:not(.header-contact) { box-shadow: 0 2px #3178ab; }
    nav .header-contact { display: flex; align-items: center; gap: 24px; background: #3178ab; color: white; border-radius: 3px; padding: 13px 20px; }
    nav .header-contact:hover { color: white; background: #235f8a; }
  }
  @media (min-width: 723px) and (max-width: 900px) {
    .header-inner { width: 90%; gap: 16px; min-height: 82px; }
    .brand img { width: 115px; }
    nav { gap: 16px; }
    nav a { font-size: 10px; }
    nav .header-contact { gap: 10px; padding: 12px; }
  }
`;
