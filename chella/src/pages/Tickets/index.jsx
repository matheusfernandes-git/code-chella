import Banner from "components/Banner";
import Form from "components/Form/index";
import TicketBanner from "assets/Tickets/ingresso-banner.png";
import "./style.css";

export default function Tickets() {
  return (
    <section className="container-ticket">
      <Banner src={TicketBanner} title={"Garanta seu Ingresso"} />
      <section className="container-form">
        <h3>Preencha o formulário a seguir:</h3>
        <Form />
      </section>
    </section>
  );
}
