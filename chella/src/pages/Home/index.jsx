import AboutImg from "../../assets/Home/Imagemhomepage1.png";
import "./style.css";

export default function Home() {
  return (
    <section>
      <div className="container-banner">
        <h1>Boas-vindas ao #CodeChella2023!</h1>
      </div>
      <section className="container">
        <div className="container-content">
          <img src={AboutImg} alt="imagem" />
          <div>
            <h6>11 e 12 de Março Aluródromo de São Paulo</h6>
            <p>
              Hora de programar nossa memória com novas lembranças! Uma nova
              experiência sobre música, linguagens e, claro, tecnologia! Somos
              um festival diverso, com vários artistas e referências.
              Divirta-se!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
