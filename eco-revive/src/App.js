import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes as RoutesReact } from './routes';
import DisposalSchedule from "./pages/disposalSchedule";
import ContactUs from "./pages/contactUs/contact";
import GuidePage from "./pages/guidePage/guidepage";
import AboutUs from "./pages/aboutUs";
import CollectionLocations from "./pages/collectionLocationsPage/index";

function App() {
  return (
    <RoutesReact />
  );
}
export default App;
