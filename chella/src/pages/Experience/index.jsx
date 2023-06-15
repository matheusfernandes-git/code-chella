import "./style.css";
import ExperienceSection from "./ExperienceSections";
import ExpericenceJson from "./experience.json";
import Banner from "../../components/Banner/index";
import bannerImg from "../../assets/Experience/banner.png";

export default function Experience() {
  return (
    <>
      <Banner src={bannerImg} title={"A Experiência"} />

      {ExpericenceJson.map((experience) => {
        return (
          <section className="container-sections">
            <ExperienceSection
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
