import "./style.css";

export default function DropdownTicket(props) {
  return (
    <div className="container-dropdown d-flex flex-column gap-2">
      <label>{props.label}</label>
      <select
        required
        value={props.value}
        onChange={(event) => props.whenChange(event.target.value)}
      >
        <option>Ingresso Cortesia</option>
        <option>Ingresso Pista</option>
        <option>Ingresso Premium</option>
      </select>
    </div>
  );
}
