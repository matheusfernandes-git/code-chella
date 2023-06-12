import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Setores from "./pages/Sectors";
import Informations from "./pages/Informations";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/setores" element={<Setores />} />
        <Route path="/informacoes" element={<Informations />} />
        <Route path="/ingresso" element={<Tickets />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
