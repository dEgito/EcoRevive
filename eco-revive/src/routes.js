import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisposalSchedule from "./pages/disposalSchedule/index";
import ContactUs from "./pages/contactUs/contact";
import GuidePage from "./pages/home/home";
import AboutUs from "./pages/aboutUs/index";
import CollectionLocations from "./pages/collectionLocationsPage/index";
import Faqs from "./pages/faqs/faqs";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import WaitPage from "./pages/waitPage/wait";
import Error from "./pages/error/error";

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GuidePage />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
        <Route path="/locais" element={<CollectionLocations />} />
        <Route path="/agendamento" element={<DisposalSchedule />} />
        <Route path="login" element={<Login />} />
        <Route path="cadastro" element={<Register />} />
        <Route path="duvidas" element={<Faqs />} />
        <Route path="inicio" element={<WaitPage />} />
        <Route path="/erro" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
