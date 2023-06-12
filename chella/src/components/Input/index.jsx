import "./styles.modules.css";

export default function Input({ label, type, value }) {
  return (
    <div className="fild">
      <label>{label}</label>
      <input type={type} value={value} />
    </div>
  );
}
