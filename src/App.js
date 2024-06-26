import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

// import { Button, Container, Row, Image, Form } from "react-bootstrap";
import Fpage from "./components/Fpage";
import Signup from "./components/Signup";
import Pagev from "./components/Pagev";
import ProfileID from "./components/ProfileID";
import Passwordpage from "./components/Passwordpage";
import Houserule from "./components/Houserule";
import NavbarPage from "./components/NavbarPage";
import ResetPass from "./components/ResetPass";
import VCode from "./components/VCode";
import CreateAcc from "./components/CreateAcc";
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import Category from "./components/Category";
import Settings from "./components/Settings";
import Lang from "./components/Lang";
import Appearance from "./components/Appearance";
import Changepass from "./components/Changepass";
import Notify from "./components/Notify";
import Personal from "./components/Personal";
import FeatP from "./components/FeatP";
import PWDRequisite from "./components/PWDRequisite";
import Not from "./components/Not";
import Welcome from "./components/Welcome";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Fpage />} />
        <Route path="/Fpage" element={<Fpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Pagev" element={<Pagev />} />
        <Route path="/ProfileID" element={<ProfileID />} />
        <Route path="/Passwordpage" element={<Passwordpage />} />
        <Route path="/Houserule" element={<Houserule />} />
        <Route path="/NavbarPage" element={<NavbarPage />} />
        <Route path="/Resetpass" element={<ResetPass />} />
        <Route path="/VCode" element={<VCode />} />
        <Route path="/CreateAcc" element={<CreateAcc />} />
        <Route
          path="/NavBar"
          element={<NavBar theme={theme} setTheme={setTheme} />}
        />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Lang" element={<Lang />} />
        <Route path="/Appearance" element={<Appearance />} />
        <Route path="/Changepass" element={<Changepass />} />
        <Route path="/Notify" element={<Notify />} />
        <Route path="/Personal" element={<Personal />} />
        <Route path="/FeatP" element={<FeatP />} />
        <Route path="/PWDRequisite" element={<PWDRequisite />} />
        <Route path="/Not" element={<Not />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}
