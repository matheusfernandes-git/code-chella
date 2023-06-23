import "./style.css";

export default function Input(props) {
  const whenTyped = (event) => {
    props.whenChange(event.target.value);
  };

  return (
    <div className="d-flex flex-column gap-4">
      <label>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onChange={whenTyped}
        required
      />
    </div>
  );
}
