import AboutImg from "../../assets/Home/Imagemhomepage1.png";
import ingressoIcon from "../../assets/Home/íconeIngresso.png";
import Banner from "../../components/Banner/index";
import BannerImg from "../../assets//Home/BannerHomepage.png";
import imgParty from "../../assets/Home/party-img.png";
import "./style.css";
import LineUps from "../../components/LineUps";

export default function Home() {
  return (
    <section>
      <Banner src={BannerImg} title={"Boas-vindas ao #CodeChella2023!"} />
      <section className="container-about">
        <div className="container-content">
          <img className="about-img" src={AboutImg} alt="imagem" />
          <div>
            <h6>11 e 12 de Março Aluródromo de São Paulo</h6>
            <p>
              Hora de programar nossa memória com novas lembranças! Uma nova
              experiência sobre música, linguagens e, claro, tecnologia! Somos
              um festival diverso, com vários artistas e referências.
              Divirta-se!
            </p>
            <div className="container-button">
              <button>
                Comprar ingresso! <img src={ingressoIcon} alt="iIcon" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container-lineUp">
        <h1>/Line-Up/</h1>
      </div>
      <LineUps day={"SABADO 11/06"} />
      <section className="container-party">
      </section>
    </section>
  );
}
