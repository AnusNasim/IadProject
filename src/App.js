// import logo from './logo.svg';
import "./App.css";

import LoginImage from "./components/LoginPage/LoginImage";
import RegistrationImage from "./components/RegistrationForm/RegistrationImage";
import Homepg from "./pages/Home/Home";
import Profile from "./pages/PROFILE/Profile";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginImage />} />
        <Route path="/Registration" element={<RegistrationImage />} />
        <Route path="/socialPage" element={<Homepg />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
