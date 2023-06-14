import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";
import { Links } from "./Links/index";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

export default function Header() {
  const [toogleMenu, setToogleMenu] = useState(false);

  const showMenu = () => {
    setToogleMenu(!toogleMenu);
  };

  return (
    <header>
      <img src={logo} alt="logo" />
      <div className="open-menu">
        <AiOutlineMenu onClick={showMenu} size={40} color="#fff" />
      </div>
      <nav className={toogleMenu ? "show-menu" : "closed-menu"}>
        <ul className="menu-itens">
          <li className="close-menu">
            <AiOutlineClose size={40} color="#fff" onClick={showMenu} />
          </li>
          {Links.map((link) => {
            return (
              <li className="li-links" key={link.id}>
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
