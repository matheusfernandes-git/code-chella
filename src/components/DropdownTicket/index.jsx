import "./style.css";
import { Options } from "./options";

export default function DropdownTicket(props) {
  return (
    <div className="container-dropdown d-flex flex-column gap-2">
      <label>{props.label}</label>
      <select
        required
        value={props.value}
        onChange={(event) => props.whenChange(event.target.value)}
      >
        {Options.map((opt, index) => {
          return <option key={index}>{opt.content}</option>;
        })}
      </select>
    </div>
  );
}
