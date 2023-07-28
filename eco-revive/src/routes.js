import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisposalSchedule from "./pages/disposalSchedule/index";
import ContactUs from "./pages/contactUs/contact";
import GuidePage from "./pages/guidePage/guidePage";
import AboutUs from "./pages/aboutUs/index";
import CollectionLocations from "./pages/collectionLocationsPage/index";
import Faqs from "./pages/faqs/faqs"
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Home from "./pages/home/home";
import ControlPanel from "./pages/controlPanel/controlPanel";

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
        <Route path="/cadastro" element={<Register />}/>
        <Route path="/duvidas" element={<Faqs />}/>
        <Route path="/home" element={<Home />} />
        <Route path="/painel" element={<ControlPanel/>} />
      </Routes>
    </BrowserRouter>
  );
};
