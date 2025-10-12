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

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GloblaStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
           <Route path="/montaje" element={<Mounting/>} />
            <Route path="/mantenimiento" element={<Maintenance/>} />
            <Route path="/servicios" element={<Service/>} />
            <Route path="/contacto" element={<Contact/>} /> 
        </Route> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
