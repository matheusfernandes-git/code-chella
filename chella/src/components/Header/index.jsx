import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Links } from "./Links/index";
import "./style.css";

export default function Header() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav className="navbar navbar-expand-md sticky-top">
        <div className="container" id="teste">
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#menuNavbar"
          >
            <span class="navbar-toggler-icon navbar-dark"></span>
          </button>
          <section id="menuNavbar" className="collapse navbar-collapse">
            <ul className="list-unstyled navbar-nav">
              {Links.map((link) => {
                return (
                  <li key={link.id}>
                    <Link className="links" to={link.to}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </nav>
    </header>
  );
}
