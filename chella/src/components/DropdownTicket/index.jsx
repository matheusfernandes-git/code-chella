import "./styles.modules.css";

export default function DropdownTicket({ label, value }) {
  return (
    <div className="container-dropdown">
      <label>{label}</label>
      <select name="" value={value}>
        <option value=""></option>
      </select>
    </div>
  );
}
