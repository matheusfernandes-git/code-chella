import "./style.css";

export default function LineUps({ day, title, row1, row2, row3 }) {
  return (
    <section className="d-flex w-100 flex-column justify-content-center align-items-center p-5 gap-5">
      <div className="d-flex flex-row justify-content-center align-items-center gap-3">
        <hr />
        <div className="data d-flex align-items-start p-3 gap-2">
          <h3>{day}</h3>
        </div>
        <hr />
      </div>
      <div className="container-musics d-flex flex-column justify-content-center align-items-center gap-3">
        <h2 className="text-center">{title}</h2>
        <ul className="ul-row1">
          {row1.map((musics, index) => {
            return <li key={index}>{musics.name}</li>;
          })}
        </ul>
        <ul className="ul-row2">
          {row2.map((musics, index) => {
            return <li key={index}>{musics.name}</li>;
          })}
        </ul>
        <ul className="ul-row3">
          {row3.map((musics, index) => {
            return <li key={index}>{musics.name}</li>;
          })}
        </ul>
      </div>
    </section>
  );
}
