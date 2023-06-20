import "./style.css";
import ExperienceSection from "./ExperienceSections";
import ExpericenceJson from "./ExperienceSections/experience.json";
import Banner from "components/Banner/index";
import bannerImg from "assets/Experience/banner.png";

export default function Experience() {
  return (
    <>
      <Banner src={bannerImg} title={"A Experiência"} />
      {ExpericenceJson.map((experience, index) => {
        return (
          <section className="container-sections">
            <ExperienceSection
              key={index}
              id={experience.id}
              title={experience.title}
              text={experience.text}
              idtext={experience.idSust}
              imgSust={experience.imgSust}
            />
          </section>
        );
      })}
    </>
  );
}
