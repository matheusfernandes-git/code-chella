import "./styles.module.css";

export default function MusicsList({ row1, row2, row3 }) {
  return (
    <>
      <ul className="ul-row1">
        {row1.map((musics) => {
          return <li>{musics.name}</li>;
        })}
      </ul>
      <ul className="ul-row2">
        {row2.map((musics) => {
          return <li>{musics.name}</li>;
        })}
      </ul>
      <ul className="ul-row3">
        {row3.map((musics) => {
          return <li>{musics.name}</li>;
        })}
      </ul>
    </>
  );
}
