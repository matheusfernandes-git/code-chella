import Banner from "components/Banner/index";
import InfoBanner from "assets/Informations/infos-banner.png";
import contentQuestions from "./question.json";
import "./style.css";
import Questions from "./Questions";

export default function Informations() {
  return (
    <section>
      <Banner src={InfoBanner} title={"Informações Gerais"} />
      <section className="container-infos">
        <h3>Perguntas Frequentes:</h3>
        <div className="container-questions">
          {contentQuestions.map((question, index) => {
            return (
              <div>
                <Questions key={index} title={question.sum} text={question.text} />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
