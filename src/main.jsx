import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GloblaStyle } from "./Pages/Layout/GlobalStyle";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home";
import Mounting from "./Pages/Mounting";
import Maintenance from "./Pages/Maintenance";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import HomeDesktop from "./Pages/Desktop/HomeDesk";
import LayaoutDesk from "./Pages/Layout/LayaoutDesk";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GloblaStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/montaje" element={<Mounting />} />
          <Route path="/mantenimiento" element={<Maintenance />} />
          <Route path="/servicios" element={<Service />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
        <Route element={<LayaoutDesk/>}>
          <Route path="/Home" element={<HomeDesktop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
