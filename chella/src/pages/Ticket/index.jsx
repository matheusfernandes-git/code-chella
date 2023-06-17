import Banner from "components/Banner";
import TicketBanner from "assets/Ticket/banner.png";
import logo from "assets/Ticket/logo.png";
import logoExtra from "assets/Ticket/logoextra.png";
import QrCode from "assets/Ticket/QrCode.png";
import "./style.css";
import { useContext } from "react";
import { ContextoTeste } from "../Form";

export default function Ticket(props) {

  const {name, ticket} = useContext(ContextoTeste);

  return (
    <>
      <Banner src={TicketBanner} title={"Seu ingresso está aqui"} />
      <div className="container">
        <div className="container-ticket-content">
          <h6>
            Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
            evento e divirta-se!
          </h6>
          <div className="container-ticket">
            <div className="container-logo">
              <img src={logo} alt="logo do codechella" />
              <img src={logoExtra} alt="logo extra" />
            </div>
            <div className="ticket">
              <img src={QrCode} alt="qrcode do ingresso" />
              <div className="container-ticket-infos"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
