import "./Companies.css";

const Companies = () => {
 return (
  <div className="Companies">
   <div className="container">
    <p className="companies-title">
     Более 400+ компаний по всему миру доверяют нам
    </p>
    <ul className="companies-list">
     <li className="companies-item">
      <img src="images/ai-insights-logo.svg" alt="Ai Insights" />
      <p>AI Insights</p>
     </li>
     <li className="companies-item">
      <img src="images/agency-soar-logo.svg" alt="Агенство Soar" />
      <p>Агенство Soar</p>
     </li>
     <li className="companies-item">
      <img src="images/techno-harmony-logo.svg" alt="ТехноГармония" />
      <p>ТехноГармония</p>
     </li>
     <li className="companies-item">
      <img src="images/synergy-inc-logo.svg" alt="Synergy Inc" />
      <p>Synergy Inc</p>
     </li>
     <li className="companies-item">
      <img src="images/smart-home-logo.svg" alt="Умный дом" />
      <p>Умный дом</p>
     </li>
    </ul>
   </div>
  </div>
 );
};

export default Companies;
