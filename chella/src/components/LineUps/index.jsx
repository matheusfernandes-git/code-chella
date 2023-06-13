import MusicsList from "../MusicsList";
import { row1 } from "./lineUpSaturdayRow1";
import { row2 } from "./lineUpSaturdayRow2";
import { row3 } from "./lineUpSaturdayRow3";
import { sundayRow1 } from "./lineUpSundayRow1";
import { sundayRow2 } from "./lineUpSundayRow2";
import { sundayRow3 } from "./lineUpSundayRow3";
import "./style.module.css";

export default function LineUps({ day, title }) {
  return (
    <section className="container-line-up-d1">
      <div className="container-data1">
        <div className="data1">
          <h3>{day}</h3>
        </div>
      </div>
      <div className="container-musics">
        <div className="container-music-title">
          <h2>{title}</h2>
        </div>
        <MusicsList row1={row1} row2={row2} row3={row3} />
      </div>
      <div className="container-data1">
        <div className="data1">
          <h3>{day}</h3>
        </div>
      </div>
      <div className="container-musics">
        <div className="container-music-title">
          <h2>{title}</h2>
        </div>
        <MusicsList row1={sundayRow1} row2={sundayRow2} row3={sundayRow3} />
      </div>
    </section>
  );
}
