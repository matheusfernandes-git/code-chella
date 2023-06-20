import "./style.css";
import FooterLogo from "assets/FooterLogo.png";
import { SocialList } from "./SocialList";

export default function Footer() {
  return (
    <footer>
      <div className="container-social">
        <img src={FooterLogo} alt="codechella" />
        <div className="social">
          <p>Acesse nossas redes:</p>
          <ul className="list-unstyled">
            {SocialList.map((li, index) => {
              return (
                <li key={index}>
                  <img src={li.src} alt={li.alt} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="container-info">
        <p>Developed by Matheus</p>
      </div>
    </footer>
  );
}
