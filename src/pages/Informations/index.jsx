import Banner from "components/Banner/index";
import InfoBanner from "assets/Informations/infos-banner.png";
import contentQuestions from "./question.json";
import "./style.css";
import Questions from "./Questions";

export default function Informations() {
  return (
    <section>
      <Banner src={InfoBanner} title={"Informações Gerais"} />
      <section className="d-flex flex-column align-items-center gap-5 p-5">
        <h3 className="text-center">Perguntas Frequentes:</h3>
        <div className="d-flex flex-column align-items-start gap-3">
          {contentQuestions.map((question, index) => {
            return (
              <div>
                <Questions
                  key={index}
                  title={question.sum}
                  text={question.text}
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
