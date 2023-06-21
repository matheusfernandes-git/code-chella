import "./style.css";
import Banner from "components/Banner/index";
import SetoresBanner from "assets/Setores/banner-setores.png";
import map from "assets/Setores/mapa-setores1.png";
import mobileMap from "assets/Setores/mobile/mapa-mobile.png";
import tabletMap from "assets/Setores/mobile/tabletMap.png";
import { SubtitleList } from "./subtitleList";
import Details from "./details.json";
import DetailsSections from "./DetailsSections";

export default function Sectors() {
  return (
    <section>
      <Banner src={SetoresBanner} title={"Mapa de Setores"} />
      <section className="container-map">
        <div className="container-setores-content">
          <picture>
            <source srcSet={mobileMap} media="(max-width: 768px)" />
            <source srcSet={tabletMap} media="(max-width: 1440px)" />
            <img src={map} alt="mapa de setores" />
          </picture>
          <div className="container-subtitle">
            <h6>Legenda:</h6>
            <ul>
              {SubtitleList.map((item, index) => {
                return (
                  <li key={index}>
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
          {Details.map((div, index) => {
            return (
              <>
                <DetailsSections
                  key={index}
                  title={div.title}
                  text={div.text}
                  id={div.id}
                />
              </>
            );
          })}
        </div>
      </section>
    </section>
  );
}
