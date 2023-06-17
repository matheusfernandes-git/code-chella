import { Link } from "react-router-dom";
import "./style.css";

export default function Button({ to, children, img }) {
  return (
    <button className="btn">
      <a href={''}>
        {children} <img src={img} />
      </a>
    </button>
  );
}
