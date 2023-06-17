import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Setores from "./pages/Sectors";
import Informations from "./pages/Informations";
import Form from "./pages/Form/index";
import Ticket from 'pages/Ticket/index';
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  function handleClient(client){
    let newList = [...list]
    newList.push(client);
    setList(newList);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experience />} />
        <Route path="/setores" element={<Setores />} />
        <Route path="/informacoes" element={<Informations />} />
        <Route path="/formulario" element={<Form onAddClient={handleClient} />} />
        <Route path="/ingresso" element={<Ticket list={list} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
