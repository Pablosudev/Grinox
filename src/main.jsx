import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initFadeObserver } from "./Pages/Components/Observer";
import { GlobalStyle } from "./Pages/Layout/GlobalStyle";
import Layout from "./Pages/Layout/Layout";
import ContactPage from "./Pages/Pages/ContactPage";
import HomePage from "./Pages/Pages/HomePage";
import MaintenancePage from "./Pages/Pages/MaintenancePage";
import ServicePage from "./Pages/Pages/Service";
import MountingPage from "./Pages/Pages/Mounting";
import Rea from "./Pages/Desktop/Certificados/Rea";
import Iso from "./Pages/Desktop/Certificados/Iso";

function App() {
  useEffect(() => {
    initFadeObserver(); 
  }, []);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/montaje" element={<MountingPage />} />
            <Route path="/mantenimiento" element={<MaintenancePage />} />
            <Route path="/servicios" element={<ServicePage />} />
            <Route path="/contacto" element={<ContactPage />} />
            <Route path="/rea" element={<Rea />} />
            <Route path="/iso" element={<Iso />} />
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
