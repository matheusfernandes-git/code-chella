import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/index';
import Experience from "./pages/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/experiencia" element={<Experience />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
