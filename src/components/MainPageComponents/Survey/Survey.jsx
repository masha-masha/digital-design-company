import "./Survey.css";
import { Button, ButtonPrimary } from "../../Buttons/Buttons";

const Survey = () => {
 return (
  <div className="survey">
   <div className="survey-content container">
    <div>
     <h2 className="survey-title">Индивидуальные решения для вашего бизнеса</h2>
     <p className="survey-description">
      Мы разработали опрос, который учитывает особенности вашего бизнеса, чтобы
      помочь вам достичь максимальных результатов на рынке. Это позволит нам
      лучше понять ваши потребности и предложить специализированные решения,
      адаптированные именно под вас.
     </p>
     <div className="survey-actions">
       <ButtonPrimary name="Пройти опрос"/>
       <Button name="Узнать подробнее"/>
     </div>
    </div>
       <img className= "survey-image" src="/images/survey.png" alt="survey image" />
   </div>
  </div>
 );
};

export default Survey;
