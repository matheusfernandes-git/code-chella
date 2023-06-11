import "./style.css";
import FooterLogo from "../../assets/FooterLogo.png";
import wpp from "../../assets/wpp-icon.png";
import tw from "../../assets/tw-icon.png";
import insta from "../../assets/insta-icon.png";
import tt from "../../assets/tt-icon.png";

export default function Footer() {
  return (
    <footer>
      <div className="container-social">
        <img src={FooterLogo} alt="codechella" />
        <div className="social">
          <p>Acesse nossas redes:</p>
          <ul className="list-unstyled">
            <li>
              <img src={wpp} alt="whatsapp" />
            </li>
            <li>
              <img src={tw} alt="twitch" />
            </li>
            <li>
              <img src={insta} alt="instagram" />
            </li>
            <li>
              <img src={tt} alt="twitter" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container-info">
        <p>Desenvolvido por Alura. Projeto fictício sem fins comerciais.</p>
      </div>
    </footer>
  );
}
