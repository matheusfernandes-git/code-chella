import "./style.css";

export default function Input(props) {
  const whenTyped = (event) => {
    props.whenChange(event.target.value);
  };

  return (
    <div className="fild">
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={whenTyped} required />
    </div>
  );
}
