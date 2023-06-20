import "./style.css";

export default function LineUps({ day, title, row1, row2, row3 }) {
  return (
    <section className="container-line-up">
      <div className="container-data">
        <hr />
        <div className="data">
          <h3>{day}</h3>
        </div>
        <hr />
      </div>
      <div className="container-musics">
        <div className="container-music-title">
          <h2>{title}</h2>
        </div>
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
