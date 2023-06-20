import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ to, children, img, type }) {
  return (
    <button type={type} className="btn">
      <Link to={to} className="link">
        {children} <img src={img} />
      </Link>
    </button>
  );
}
