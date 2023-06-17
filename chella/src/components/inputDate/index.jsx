import "./style.css";

export default function inputDate(props) {
  const whenTyped = (event) => {
    props.whenChange(event.target.value);
  };

  return (
    <div className="container-date">
      <label>{props.label}</label>
      <input type="date" value={props.value} onChange={whenTyped} required />
    </div>
  );
}
