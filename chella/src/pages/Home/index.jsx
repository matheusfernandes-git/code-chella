import AboutImg from "../../assets/Home/Imagemhomepage1.png";
import ingressoIcon from "../../assets/Home/íconeIngresso.png";
import Banner from "../../components/Banner/index";
import BannerImg from "../../assets//Home/BannerHomepage.png";
import { row1 } from "./lineUpSaturdayRow1/index";
import { row2 } from "./lineUpSaturdayRow2/index";
import { row3 } from "./lineUpSaturdayRow3/index";
import "./style.css";

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
      <section className="container-line-up-d1">
        <div className="container-data1">
          <div className="day1">
            <h3>SÁBADO 11/03</h3>
          </div>
        </div>
        <div className="container-musics">
          <div className="container-music-title">
            <h2>System of a DOM</h2>
          </div>
          <div className="container-r1">
            {row1.map((music) => {
              return <h5>{music.name}</h5>;
            })}
          </div>
          <div className="container-r2">
            {row2.map((music) => {
              return <h6>{music.name}</h6>;
            })}
          </div>
          <div className="container-r3">
            {row3.map((music) => {
              return <h4>{music.name}</h4>;
            })}
          </div>
        </div>
      </section>
    </section>
  );
}
