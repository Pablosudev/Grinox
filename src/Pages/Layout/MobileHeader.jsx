import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

const navigation = [
  ["Inicio", "/"],
  ["Servicios", "/servicios"],
  ["Montaje", "/montaje"],
  ["Mantenimiento", "/mantenimiento"],
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Header>
      <div className="mobile-header-bar">
        <Link className="mobile-brand" to="/" aria-label="Grinox — Inicio">
          <img src="/img/Logos/Grinox.png" alt="Grinox" />
        </Link>
        <button
          className="mobile-menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>
      {open && <button className="mobile-menu-backdrop" type="button" aria-label="Cerrar menú" onClick={() => setOpen(false)} />}
      <div className={`mobile-menu ${open ? "is-open" : ""}`} id="mobile-navigation">
        <nav aria-label="Navegación principal móvil">
          {navigation.map(([label, path], index) => (
            <NavLink to={path} end={path === "/"} key={path}>
              <span>0{index + 1}</span>{label}
            </NavLink>
          ))}
          <NavLink className="mobile-contact-link" to="/contacto">
            Hablemos <FiArrowUpRight aria-hidden="true" />
          </NavLink>
        </nav>
        <p>Montaje industrial · Bujalance, Córdoba</p>
      </div>
    </Header>
  );
}

const Header = styled.header`
  display: none;

  @media (max-width: 722px) {
    display: block;
    position: sticky;
    top: 0;
    z-index: 200;
    background: #fff;
    color: #172c3d;
    border-bottom: 1px solid #dce4e9;

    .mobile-header-bar {
      width: calc(100% - 40px);
      min-height: 72px;
      margin-inline: auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .mobile-brand,
    .mobile-menu-button,
    nav a {
      -webkit-tap-highlight-color: transparent;
    }

    .mobile-brand img {
      display: block;
      width: 118px;
      height: 42px;
      object-fit: contain;
    }

    .mobile-menu-button {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border: 1px solid #d4dfe7;
      border-radius: 3px;
      color: #172c3d;
      background: #fff;
      cursor: pointer;
    }

    .mobile-menu-button svg { width: 22px; height: 22px; }
    .mobile-menu-button:focus-visible,
    a:focus-visible { outline: 3px solid #5faee4; outline-offset: 3px; }

    .mobile-menu-backdrop {
      position: fixed;
      inset: 72px 0 0;
      border: 0;
      background: #07131c66;
      cursor: pointer;
    }

    .mobile-menu {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: calc(100svh - 72px);
      overflow-y: auto;
      background: #142b3c;
      color: #fff;
      padding: 12px 20px 24px;
      visibility: hidden;
      opacity: 0;
      transform: translateY(-10px);
      pointer-events: none;
      transition: opacity .2s ease, transform .2s ease, visibility .2s;
      box-shadow: 0 22px 45px #07131c40;
    }

    .mobile-menu.is-open {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }

    nav { display: grid; }
    nav a {
      min-height: 56px;
      display: flex;
      align-items: center;
      gap: 18px;
      border-bottom: 1px solid #ffffff1f;
      color: #edf3f7;
      text-decoration: none;
      font-size: 17px;
      letter-spacing: -.02em;
    }
    nav a > span { color: #8fc7eb; font-size: 9px; letter-spacing: .1em; }
    nav a.active:not(.mobile-contact-link) { color: #8fc7eb; }
    nav .mobile-contact-link {
      min-height: 50px;
      margin-top: 22px;
      padding-inline: 18px;
      justify-content: space-between;
      border: 0;
      border-radius: 3px;
      background: #3178ab;
      color: #fff;
      font-size: 13px;
      font-weight: 500;
    }
    .mobile-contact-link svg { width: 19px; height: 19px; }
    .mobile-menu > p { margin-top: 22px; color: #9fb5c3; font-size: 9px; letter-spacing: .1em; text-transform: uppercase; }
  }

  @media (prefers-reduced-motion: reduce) {
    .mobile-menu { transition: none; }
  }
`;
