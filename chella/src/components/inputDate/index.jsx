import './styles.modules.css';

export default function inputDate({ label, value }) {
  return (
    <div className='container-date'>
      <label>{label}</label>
      <input type="date" value={value} />
    </div>
  );
}
