import FooterLogo from "assets/FooterLogo.png";
import { SocialList } from "./SocialList";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#FACF9D" }}
      className="d-flex gap-4 pt-4 pe-5 pb-4 ps-5 align-items-center flex-column text-center justify-content-between flex-xxl-row text-xxl-start flex-md-column text-md-center"
    >
      <div>
        <img src={FooterLogo} alt="codechella" />
        <div className="social d-flex gap-4 pt-3 flex-md-row flex-column align-items-center">
          <p>Acesse nossas redes:</p>
          <ul className="list-unstyled gap-3 d-flex">
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
      <p>Developed by Matheus</p>
    </footer>
  );
}
