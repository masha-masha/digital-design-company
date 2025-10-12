import './Services.css';
import ServicesCard from './ServicesCard';

const Services = () => {
 const data = [
  {
   linkToIcon: '/images/devices.png',
   title: 'Веб и мобильные приложения',
   description:
    'Разрабатываем нативные и кроссплатформенные приложения, а так же веб-сайты и веб-сервисы',
  },
  {
   linkToIcon: '/images/services.png',
   title: 'Индивидуальный дизайн',
   description:
    'Создадим визуальную идентичность, логотип, цветовые решения, типографику и многое другое',
  },
  {
   linkToIcon: '/images/icon.png',
   title: 'Искусственный интеллект',
   description:
    'Автоматизируем рутинные процессы, создадим анализатор данных для вашего бизнеса',
  },
 ];

 return (
  <div className='services'>
   <div className='container'>
    <h2 className='services-title'>Услуги</h2>
    <p className='services-subtitle'>Что мы прелагаем</p>
    <p className='servies-description'>
     Cоздаем уникальные IT решения, которые соответствуют вашим бизнес-целям.
     Даем жизнь вашим идеям с помощью современных технологий и творческого
     подхода.
    </p>
    <div className='services-cards'>
     {data.map(({ linkToIcon, title, description }) => (
      <ServicesCard
       linkToIcon={linkToIcon}
       title={title}
       description={description}
      />
     ))}
    </div>
   </div>
  </div>
 );
};

export default Services;
