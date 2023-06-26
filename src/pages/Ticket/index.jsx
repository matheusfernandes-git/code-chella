import Banner from "components/Banner";
import TicketBanner from "assets/Ticket/banner.png";
import logo from "assets/Ticket/logo.png";
import logoExtra from "assets/Ticket/logoextra.png";
import QrCode from "assets/Ticket/QrCode.png";
import QrCodeBigger from "assets/Ticket/Qr code 1.png";
import QrCodeMobile from "assets/Ticket/QrcodeMobile.png";
import "./style.css";
import InfoList from "./InfoList";

export default function Ticket({ list }) {
  console.log(list);

  return (
    <>
      <Banner src={TicketBanner} title={"Seu ingresso está aqui"} />
      <div className="container">
        <div className="container-ticket">
          <h6>
            Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do
            evento e divirta-se!
          </h6>
          <div className="container-ticket-content">
            <div className="container-logo">
              <img src={logo} alt="logo do codechella" />
              <img src={logoExtra} alt="logo extra" />
            </div>
            <div className="ticket">
              <picture>
                <source srcSet={QrCodeMobile} media="(max-width: 768px)" />
                <source srcSet={QrCodeBigger} media="(max-width: 1440px)" />
                <img src={QrCode} alt="qrcode do ingresso" />
              </picture>
              <div className="container-ticket-infos">
                <div className="infos">
                  <InfoList name={list.name} ticket={list.ticket} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
