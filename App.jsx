import { Routes, Route } from "react-router-dom";
import Navigation from "./components/NavBar";
import Home from "./components/Home";

import FormPage from "./pages/FormPage";
import DisplayPage from "./pages/DisplayPage";
import AboutUs from "./pages/AboutUs";



const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/display" element={<DisplayPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>

   
    </>
  );
};

export default App;
