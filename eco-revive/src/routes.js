import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisposalSchedule from "./pages/disposalSchedule";
import ContactUs from "./pages/contactUs/contact";
import GuidePage from "./pages/guidePage/guidepage";
import AboutUs from "./pages/aboutUs";
import CollectionLocations from "./pages/collectionLocationsPage/index";
import Login from "./pages/login"

export const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GuidePage />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/contato" element={<ContactUs />} />
        <Route path="/locais" element={<CollectionLocations />} />
        <Route path="/agendamento" element={<DisposalSchedule/>}/>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}