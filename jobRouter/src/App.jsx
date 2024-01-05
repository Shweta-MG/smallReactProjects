import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./help/FAQ";
import Contact, { contactRequest } from "./help/Contact";
import NotFound from "./pages/NotFound";
import Careers, { CareerLoader } from "./pages/Careers/Career";
import CareerDetails, { CareerDetailsLoader } from "./pages/Careers/CareerDetails";
import CareerError from "./pages/Careers/CareerError";

//layouts
import RootLayout from "./layouts/RootLayouts";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<CareerError/>}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<Contact />} action={contactRequest}/>
      </Route>

      <Route path="careers" element={<CareerLayout />}>
        <Route index element={<Careers />} loader={CareerLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={CareerDetailsLoader}
          
        ></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
