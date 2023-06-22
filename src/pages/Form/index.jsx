import Banner from "components/Banner";
import TicketBanner from "assets/Form/ingresso-banner.png";
import "./style.css";
import FormIcon from "assets/Form/form-icon.png";
import Input from "components/Input";
import DateInput from "components/inputDate/index";
import DropdownTicket from "components/DropdownTicket";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const context = createContext();
export default function Form({ onAddClient }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState("");
  const [birth, setBirth] = useState("");
  const navigate = useNavigate();

  const whenSave = (event) => {
    event.preventDefault();

    const data = { name, ticket };
    onAddClient(data);

    navigate("/ingresso");

    setName("");
    setEmail("");
    setTicket("");
    setBirth("");
  };

  return (
    <section>
      <Banner src={TicketBanner} title={"Garanta seu Ingresso"} />
      <context.Provider value={{ name, ticket }}>
        <section className="container-ticket-form">
          <h3>Preencha o formulário a seguir:</h3>
          <form onSubmit={whenSave}>
            <Input
              label="Nome:"
              type="text"
              value={name}
              whenChange={(value) => setName(value)}
            />
            <Input
              label="Email:"
              type="email"
              value={email}
              whenChange={(value) => setEmail(value)}
            />
            <div className="container-smallers-inputs">
              <DropdownTicket
                label={"Tipo de ingresso"}
                value={ticket}
                whenChange={(value) => setTicket(value)}
              />
              <DateInput
                label={"Data de nascimento:"}
                value={birth}
                whenChange={(value) => setBirth(value)}
              />
            </div>
            <div className="container-form-btn">
              <button type="submit" className="btn">
                Avançar
                <img src={FormIcon} />
              </button>
            </div>
          </form>
        </section>
      </context.Provider>
    </section>
  );
}
