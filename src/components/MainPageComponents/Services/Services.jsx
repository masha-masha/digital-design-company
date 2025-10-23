import "./Services.css";
import ServicesCard from "./ServicesCard";

const Services = () => {
 const data = [
  {
   id: 1,
   linkToIcon: "/images/devices.png",
   title: "Веб и мобильные приложения",
   description:
    "Разрабатываем нативные и кроссплатформенные приложения, а так же веб-сайты и веб-сервисы",
  },
  {
   id: 2,
   linkToIcon: "/images/services.png",
   title: "Индивидуальный дизайн",
   description:
    "Создадим визуальную идентичность, логотип, цветовые решения, типографику и многое другое",
  },
  {
   id: 3,
   linkToIcon: "/images/icon.png",
   title: "Искусственный интеллект",
   description:
    "Автоматизируем рутинные процессы, создадим анализатор данных для вашего бизнеса",
  },
 ];

 return (
  <div className="services">
   <div className="container">
    <h2 className="services-title">Услуги</h2>
    <p className="services-subtitle">Что мы предлагаем</p>
    <p className="services-description">
     Cоздаем уникальные IT решения, которые соответствуют вашим бизнес-целям.<br/>
     Даем жизнь вашим идеям с помощью современных технологий и творческого
     подхода.
    </p>
    <ul className="services-list">
     {data.map(({ linkToIcon, title, description, id }) => (
      <ServicesCard
       key={id}
       linkToIcon={linkToIcon}
       title={title}
       description={description}
      />
     ))}
    </ul>
   </div>
  </div>
 );
};

export default Services;
