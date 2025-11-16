import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./Pages/Layout/GlobalStyle";
import { initFadeObserver } from "./Pages/Components/Observer";

import Layout from "./Pages/Layout/Layout";
import Mounting from "./Pages/Mobile/Mounting";
import Maintenance from "./Pages/Mobile/Maintenance";
import Service from "./Pages/Mobile/Service";
import Contact from "./Pages/Mobile/Contact";
import HomePage from "./Pages/Pages/HomePage";


function App() {
  useEffect(() => {
    initFadeObserver(); // Activamos el fade global
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/montaje" element={<Mounting />} />
            <Route path="/mantenimiento" element={<Maintenance />} />
            <Route path="/servicios" element={<Service />} />
            <Route path="/contacto" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Renderizado
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
