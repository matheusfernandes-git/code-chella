import "./style.css";
import AboutImg from "assets/Home/Imagemhomepage1.png";
import mobileImg from "assets/Home/mobile/img1-home-mobile.png";
import TicketIcon from "assets/Home/íconeIngresso.png";
import Banner from "components/Banner/index";
import BannerImg from "assets//Home/BannerHomepage.png";
import LineUps from "components/LineUps";
import { row1 } from "./lineUpSaturdayRow1";
import { row2 } from "./lineUpSaturdayRow2";
import { row3 } from "./lineUpSaturdayRow3";
import { sundayRow1 } from "./lineUpSundayRow1";
import { sundayRow2 } from "./lineUpSundayRow2";
import { sundayRow3 } from "./lineUpSundayRow3";
import Button from "components/Button";

export default function Home() {
  return (
    <>
      <Banner src={BannerImg} title={"Boas-vindas ao #CodeChella2023!"} />
      <section className="container container-about">
        <section className="mt-5 mb-5">
          <div className="container-content">
            <picture>
              <source
                className="mobile-img"
                srcSet={mobileImg}
                media="(max-width: 768px)"
              />
              <img className="about-img" src={AboutImg} alt="imagem" />
            </picture>
            <div className="container-about-text">
              <h6>11 e 12 de Março Aluródromo de São Paulo</h6>
              <p>
                Hora de programar nossa memória com novas lembranças! Uma nova
                experiência sobre música, linguagens e, claro, tecnologia! Somos
                um festival diverso, com vários artistas e referências.
                Divirta-se!
              </p>
              <div className="container-button">
                <Button to={"/ingresso"} img={TicketIcon}>
                  Comprar ingresso
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className="container-lineUp">
          <h1>/Line-Up/</h1>
        </div>
        <LineUps
          day={"<SABADO 11/06>"}
          title={"System of a DOM"}
          row1={row1}
          row2={row2}
          row3={row3}
        />
        <LineUps
          day={"<DOMINGO 12/06>"}
          title={"Lana Del Ploy"}
          row1={sundayRow1}
          row2={sundayRow2}
          row3={sundayRow3}
        />
      </section>
      <section className="container-party"></section>
    </>
  );
}
