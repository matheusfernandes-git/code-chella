import AboutImg from "../../assets/Home/Imagemhomepage1.png";
import ingressoIcon from "../../assets/Home/íconeIngresso.png";
import "./style.css";

export default function Home() {
  return (
    <section>
      <div className="container-banner">
        <h1>Boas-vindas ao #CodeChella2023!</h1>
      </div>
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
      <section className="container-line-up-d1">
        <div className="container-lineUp">
          <h1>/Line-Up/</h1>
        </div>
        <div className="container-data1">
          <div className="day1">
            <h3>SÁBADO 11/03</h3>
          </div>
        </div>
        <div className="container-musics">
          <div className="container-music-title">
            <h2>System of a DOM</h2>
          </div>
          <div className="musics">
            <div>
              <h5>Python Maiden</h5>
              <h5>Python Maiden</h5>
              <h5>Python Maiden</h5>
              <h5>Python Maiden</h5>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </section>
  );
}
