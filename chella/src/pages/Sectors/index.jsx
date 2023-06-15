import Banner from "../../components/Banner/index";
import SetoresBanner from "../../assets/Setores/banner-setores.png";
import map from "../../assets/Setores/mapa-setores1.png";
import mobileMap from "../../assets/Setores/mobile/mapa-mobile.png";
import PistaImg from "../../assets/Setores/festa.png";
import pistaMobile from "../../assets/Setores/mobile/mapa2-mobile.png";
import PremiumImg from "../../assets/Setores/festa2.png";
import premiumMobile from "../../assets/Setores/mobile/mapa3-mobile.png";
import ArqImg from "../../assets/Setores/arquibancadas.png";
import arqMobile from "../../assets/Setores/mobile/mapa4-mobile.png";
import { SubtitleList } from "./subtitleList";
import "./style.css";

export default function Sectors() {
  return (
    <section>
      <Banner src={SetoresBanner} title={"Mapa de Setores"} />
      <section className="container-map">
        <div className="container-setores-content">
          <picture>
            <source srcSet={mobileMap} media="(max-width: 768px)" />
            <img src={map} alt="mapa de setores" />
          </picture>
          <div className="container-subtitle">
            <h6>Legenda:</h6>
            <ul className="list-unstyled">
              {SubtitleList.map((item) => {
                return (
                  <li>
                    <img src={item.img} />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className="container-details">
        <h5>Mais detalhes sobre os setores:</h5>
        <div className="container-details-content">
          <div>
            <picture>
              <source srcSet={pistaMobile} media="(max-width: 768px)" />
              <img src={PistaImg} alt="mulher em uma festa" />
            </picture>
            <h6>Pista</h6>
            <p>
              Pista convencional, atendida pelos bares e banheiros das laterais
              do estádio. Espaço amplo, com local para sentar e descansar.
              Separada da pista premium por uma grade.
            </p>
          </div>
          <div className="container-premium">
            <div className="div-extra"></div>
            <picture>
              <source srcSet={premiumMobile} media="(max-width: 768px)" />
              <img src={PremiumImg} alt="festa colorida" />
            </picture>
            <h6>Pista Premium</h6>
            <p>
              Pista mais próxima do palco, com acesso muito próximo a banheiros
              e bares num raio de 100m. Todas as pessoas idosas e/ou com
              deficiência têm direito a acesso gratuito a essa área.
            </p>
          </div>
          <div className="container-arq">
          <picture>
            <source srcSet={arqMobile} media="(max-width: 768px)" />
            <img src={ArqImg} alt="arquibancada" />
          </picture>
            <h6>Cadeiras</h6>
            <p>
              Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros
              e bares, visão um pouco elevada em relação às pistas.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
