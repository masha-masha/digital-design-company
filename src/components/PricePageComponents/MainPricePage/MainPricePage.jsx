import "./MainPricePage.css";
import LiSVG from "./LiSVG";

const MainPricePage = () => {
 return (
  <ul className="price-page-list">
   <li className="disign">
    <h3>Дизайн</h3>
    <p className="price-page-information">
     <span>₽150.000</span>/по частям
    </p>
    <p className="price-page-description">
     Идеально для малых бизнесов и стартапов, которые хотят создать свой
     узнаваемый стиль. Поможет выделиться среди конкурентов засчет уникальности.
    </p>
    <div className="price-page-subtitle-wrapper">
     <div className="price-page-subtitle-line"></div>
     <div className="price-page-subtitle">Что вы получите</div>
     <div className="price-page-subtitle-line"></div>
    </div>
    <ul className="what-will-you-get-list">
     <li>
      <LiSVG />
      <p>Логотип и фирменный стиль</p>
     </li>
     <li>
      <LiSVG />
      <p>Один концепт дизайна</p>
     </li>
     <li>
      <LiSVG />
      <p>Дизайн для 10 страниц</p>
     </li>
     <li>
      <LiSVG />
      <p>Анимации и интерактивные элементы</p>
     </li>
     <li>
      <LiSVG />
      <p>Правки до финального утверждения</p>
     </li>
    </ul>
   </li>
   <li className="mobile application">
    <h3>Мобильное приложение</h3>
    <p className="price-page-information">
     <span>₽700.000</span>/по частям
    </p>
    <p className="price-page-description">
     Подходит для проектов с высокими требованиями, где необходимо создать
     уникальное приложение с персонализированными функциями.
    </p>
    <div className="price-page-subtitle-wrapper">
     <div className="price-page-subtitle-line"></div>
     <div className="price-page-subtitle">Что вы получите</div>
     <div className="price-page-subtitle-line"></div>
    </div>
    <ul className="what-will-you-get-list">
     <li>
      <LiSVG />
      <p>Мобильное приложение для iOS и Android</p>
     </li>
     <li>
      <LiSVG />
      <p>Интеграция с внешними сервисами и API</p>
     </li>
     <li>
      <LiSVG />
      <p>Анимации и оригинальный дизайн</p>
     </li>
     <li>
      <LiSVG />
      <p>Поддержка в течение 3 месяцев</p>
     </li>
     <li>
      <LiSVG />
      <p>Проектирование UX/UI</p>
     </li>
     <li>
      <LiSVG />
      <p>Тестирование</p>
     </li>
     <li>
      <LiSVG />
      <p>Публикация в магазины приложений</p>
     </li>
    </ul>
   </li>
   <li className="website">
    <h3>Веб-сайт</h3>
    <p className="price-page-information">
     <span>₽250.000</span>/по частям
    </p>
    <p className="price-page-description">
     Подходит для компаний, которым нужен многостраничный сайт, чтобы наглядно
     представить свои услуги или продукты, а так же рассказать о компании.
    </p>
    <div className="price-page-subtitle-wrapper">
     <div className="price-page-subtitle-line"></div>
     <div className="price-page-subtitle">Что вы получите</div>
     <div className="price-page-subtitle-line"></div>
    </div>
    <ul className="what-will-you-get-list">
     <li>
      <LiSVG />
      <p>Многостраничный сайт до 10 страниц</p>
     </li>
     <li>
      <LiSVG />
      <p>Уникальный дизайн</p>
     </li>
     <li>
      <LiSVG />
      <p>Интеграция социальных сетей</p>
     </li>
     <li>
      <LiSVG />
      <p>Поддержка в течение 3 месяцев</p>
     </li>
     <li>
      <LiSVG />
      <p>SEO-оптимизация</p>
     </li>
     <li>
      <LiSVG />
      <p>Интеграция CRM и других систем</p>
     </li>
    </ul>
   </li>
  </ul>
 );
};

export default MainPricePage;
