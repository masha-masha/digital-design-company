import "./Price.css";

const Price = () => {
 return (
  <div className="price">
   <div className="price-content container">
    <img className="price-image" src="/images/price.png" alt="Цены" />
    <div>
     <h2 className="price-title">
      Профессиональная экспертиза, ведущая к успеху
     </h2>
     <p className="price-description">
      Мы предлагаем прозрачные цены на наши услуги. Наша экспертиза включает в
      себя анализ рынка, разработку стратегий и внедрение инновационных
      технологий — все, что нужно для достижения ваших целей. Стремимся
      обеспечить индивидуальный подход к каждому клиенту для максимальной
      эффективности.
     </p>
     <div className="price-actions">
      <button className="button">Посмотреть цены</button>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Price;
