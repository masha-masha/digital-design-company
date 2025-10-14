import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
 const data = [
  {
   id: 1,
   linkToImage: "/images/portfolio-personal-account.png",
   title: "Разработка личного кабинета",
   description:
    "Мы разработали удобное веб-приложение для компании “Умный дом”, которое позволяет управлять устройствами умного дома даже с мобильного устройства.",
  },
  {
   id: 2,
   linkToImage: "/images/implementation-of-AI.png",
   title: "Внедрение ИИ в работу",
   description:
    "Помогли автоматизировать рутинные процессы в компании “Synergy Inc” с помощью внедрения искуственного интелекта.",
  },
  {
   id: 3,
   linkToImage: "/images/design-code.png",
   title: "Создание дизайн кода",
   description:
    "С нуля разработали дизайн код для компании “Агенство Soar”. В него входят шрифты, иллюстрации, графические паттерны, мерч и так далее.",
  },
 ];

 return (
  <div className="portfolio">
   <div className="container">
    <h2 className="portfolio-title">Портфолио</h2>
    <p className="portfolio-subtitle">Наши кейсы</p>
    <p className="portfolio-description">
     Каждый проект уникален, и мы готовы взять на себя вашу задачу, чтобы
     превратить идеи в реальность!
    </p>
    <ul className="portfolio-list">
     {data.map(({ linkToImage, title, description, id }) => (
      <PortfolioCard
       key={id}
       linkToImage={linkToImage}
       title={title}
       description={description}
      />
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Portfolio;
