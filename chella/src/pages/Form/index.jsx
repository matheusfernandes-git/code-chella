import Banner from "components/Banner";
import TicketBanner from "assets/Form/ingresso-banner.png";
import "./style.css";
import FormIcon from "assets/Form/form-icon.png";
import Button from "components/Button";
import Input from "components/Input";
import DateInput from "components/inputDate/index";
import DropdownTicket from "components/DropdownTicket";
import { createContext, useState } from "react";
import InfoList from "../Ticket/InfoList";
import Ticket from "../Ticket";

export const ContextoTeste = createContext();
export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [ticket, setTicket] = useState("");
  const [birth, setBirth] = useState("");

  const whenSave = (event) => {
    event.preventDefault();

    // window.location.href = '/ingresso';

    <ContextoTeste.Provider value={{ name, ticket }}>
      <div>
        <Ticket />
      </div>
    </ContextoTeste.Provider>;

    setName("");
    setEmail("");
    setTicket("");
    setBirth("");
  };

  const teste = () => {
    const ul = document.createElement("ul");
    ul.classList.add("infos");
    const h6 = document.createElement("h6");
    h6.innerHTML += name;
    ul.innerHTML += `
      <li>${ticket}</li>
      <li>Data: 11/03</li>
      <li>Local: São Paulo-SP</li>
    `;

    console.log(ul);
  };

  return (
    <section>
      <Banner src={TicketBanner} title={"Garanta seu Ingresso"} />
      <section className="container-ticket-form">
        <h3>Preencha o formulário a seguir:</h3>
        <form onSubmit={whenSave}>
          <Input
            label="Nome Completo:"
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
            <Button to={"#"} img={FormIcon}>
              Avançar
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
}
