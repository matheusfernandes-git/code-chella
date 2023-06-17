import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ to, children, img, type }) {
  return (
    <button type={type} className="btn">
      <a href={to}>
        {children} <img src={img} />
      </a>
    </button>
  );
}
