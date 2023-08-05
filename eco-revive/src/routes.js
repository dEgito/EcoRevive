import { BrowserRouter, Routes, Route } from "react-router-dom";

import GuidePage from "./pages/guidePage/guidePage";
import AboutUs from "./pages/aboutUs/index";
import CollectionLocations from "./pages/collectionLocationsPage/index";
import ContactUs from "./pages/contactUs/contact";
import Error from "./pages/error/error";
import Faqs from "./pages/faqs/faqs";
import History from "./pages/history/history";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import RegisterCompany from "./pages/registerCompany/company";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GuidePage />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
        <Route path="/duvidas" element={<Faqs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/locais" element={<CollectionLocations />} />
        <Route path="/historico" element={<History />} />
        <Route path="/empresas" element={<RegisterCompany />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
