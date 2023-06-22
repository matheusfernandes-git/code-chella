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
          <section className="w-100 d-flex flex-column justify-content-center align-items-center p-5 mt-sm-4 p-sm-5 h-sm-100">
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
