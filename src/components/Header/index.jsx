import { Link } from "react-router-dom";
import logo from "assets/logo1.png";
import { Links } from "./Links/index";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

export default function Header() {
  const [toogleMenu, setToogleMenu] = useState(false);
  const showMenu = () => setToogleMenu(!toogleMenu);

  return (
    <header>
      <Link className="logo-link" to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div className="open-menu">
        <Link to="#">
          <AiOutlineMenu onClick={showMenu} size={40} color="#fff" />
        </Link>
      </div>
      <nav className={toogleMenu ? "show-menu" : "closed-menu"}>
        <ul className="menu-itens" onClick={showMenu}>
          <li className="close-menu">
            <Link to="#">
              <AiOutlineClose size={40} color="#fff" />
            </Link>
          </li>
          {Links.map((link, index) => {
            return (
              <li className="li-links" key={index}>
                <Link className="links" to={link.to}>
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
