import "./Survey.css";

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
        <button className="button button--primary">Пройти опрос</button>
        <button className="button">Узнать подробнее</button>
     </div>
    </div>
    <div>
        <img src="/images/survey.png" alt="survey image" />
    </div>
   </div>
  </div>
 );
};

export default Survey;
