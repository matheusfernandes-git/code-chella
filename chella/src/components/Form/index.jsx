import DropdownTicket from "components/DropdownTicket/index";
import DateInput from "components/inputDate/index";
import Input from "components/Input/index";
import "./style.css";

export default function Form() {
  return (
    <form>
      <Input label={"Nome Completo:"} type={"text"} />
      <Input label={"Email:"} type={"email"} />
      <div className="container-smallers-inputs">
        <DropdownTicket label={"Tipo de ingresso"} />
        <DateInput label={"Data de nascimento:"} />
      </div>
    </form>
  );
}
