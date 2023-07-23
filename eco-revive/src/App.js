import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

import DisposalSchedule from "./pages/disposalSchedule";
import ContactUs from "./pages/contactUs/contact";
import GuidePage from "./pages/guidePage/guidepage";
import AboutUs from "./pages/aboutUs";
import CollectionLocations from "./pages/collectionLocationsPage/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GuidePage />} />
        <Route path="/sobre" exact element={<AboutUs />} />
        <Route path="/contato" exact element={<ContactUs />} />
        <Route path="/locais" exact element={<CollectionLocations />} />
        <Route path="/agendamento" exact element={<DisposalSchedule/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
