import React from "react";
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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Fpage />} />
        <Route path="/Fpage" element={<Fpage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Pagev" element={<Pagev />} />
        <Route path="/ProfileID" element={<ProfileID />} />
      </Routes>
    </BrowserRouter>
  );
}
