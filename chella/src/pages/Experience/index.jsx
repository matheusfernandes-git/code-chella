import "./style.css";
import Banner from "../../components/Banner";
import BannerImg from "../../assets/Experience/BannerExperiência.png";
import Aimg from "../../assets/Experience/Experiência1.png";
import Simg from "../../assets/Experience/Experiência2.png";
import Atimg from '../../assets/Experience/Experiência3.png';

export default function Experience() {
  return (
    <section>
      <Banner src={BannerImg} title={"A Experiência"} />
      <section className="container-accessibility">
        <div className="container-accessibility-content">
          <img src={Aimg} alt="mulher comemorando" />
          <div className="container-accessibility-text">
            <h6>Acessibilidade e Inclusão</h6>
            <p>
              Nosso evento tenta abraçar um público mais amplo em todos os
              sentidos, de todas as idades, corpos, gostos e pensamentos! Isso
              está presente no espaço físico, na sinalização, no treinamento da
              equipe de apoio, na comunicação em libras, braile, visual e tátil.
              Além disso, dispomos de ingressos gratuitos para pessoas com
              deficiência e acompanhantes, pessoas idosas e crianças!
            </p>
          </div>
        </div>
      </section>
      <section className="container-sustainability">
        <div className="container-sustainability-content">
          <img src={Simg} alt="sacola de garrafas" />
          <div className="container-sustainability-text">
            <h6>Sustentabilidade</h6>
            <p>
              Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
              levamos o futuro do nosso planeta a sério. Nosso festival é
              carbono zero, com utilização de copos retornáveis, coleta e
              destinação adequada de resíduos, e transporte coletivo.
            </p>
          </div>
        </div>
      </section>
      <section className="container-attractions">
        <div className="container-attractions-content">
          <img src={Atimg} alt="sacola de garrafas" />
          <div className="container-attractions-text">
            <h6>Atrações</h6>
            <p>
            Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
