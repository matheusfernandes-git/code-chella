import "./style.css";

export default function DropdownTicket(props) {
  return (
    <div className="container-dropdown">
      <label>{props.label}</label>
      <select
        required
        value={props.value}
        onChange={(event) => props.whenChange(event.target.value)}
      >
        <option></option>
        <option>Ingresso cortesia</option>
        <option>Ingresso pista</option>
        <option>Ingresso premium</option>
      </select>
    </div>
  );
}
