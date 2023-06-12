import Banner from "../../components/Banner/index";
import InfoBanner from "../../assets/Informations/infos-banner.png";
import "./styles.modules.css";

export default function Informations() {
  return (
    <section>
      <Banner src={InfoBanner} title={"Informações Gerais"} />
      <section className="container-infos">
        <h3>Perguntas Frequentes:</h3>
        <div className="container-questions">
          <details>
            <summary>Quais serão as atrações?</summary>
            <p>
              Teremos dois dias de shows, o primeiro (11/03) com bandas de rock,
              e o segundo (12/03) com bandas pop. Confira o line-up em detalhes
              clicando neste link!
            </p>
          </details>
          <details>
            <summary>Qual é a classificação etária?</summary>
            <p>
              A idade mínima para entrar no festival é a partir de 16 anos, sem restrição de idade máxima!
            </p>
          </details>
          <details>
            <summary>Quais serão os setores disponíveis?</summary>
            <p>
              Teremos a pista premium, comum, cadeiras no térreo, cadeiras superiores e as rampas. O espaço será muito grande para que você não se preocupe em ficar sem assentos!
            </p>
          </details>
          <details>
            <summary>Quais serão os itens proibidos?</summary>
            <p>
              É proibido a entrada com qualquer tipo de objetos cortantes ou itens perigosos. Será feita uma revista na entrada para certificarmos que ninguém se machuque dentro do festival!
            </p>
          </details>
        </div>
      </section>
    </section>
  );
}
