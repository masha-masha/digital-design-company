import "./AboutCompanyPageMain.css";

const companyFacts = [
  {
    id: 1,
    title: "8 лет",
    description: "помогаем разрабатывать инновационные IT решения",
  },
  {
    id: 2,
    title: "80+ клиентов",
    description: "среди которых 90% возвращаются к нам снова",
  },
  {
    id: 3,
    title: "4 офиса",
    description: "в ежедневном режиме работают по всей стране",
  },
  {
    id: 4,
    title: "30+ наград",
    description: "получили наши проекты на международных конкурсах",
  },
];


const Card = ({ title, description}) => {
    return (
        <div className="about-company-card">
        <h4 className="card-title">{title}</h4>
        <p className="card-description">{description}</p>
        </div>
    )
};


const AboutCompanyPageMain = () => {
 return (
  <div className="about-company-page-content">
   <div className="about-company-information">
    <p className="about-company-description">
     Мы команда единомышленников, объединенных страстью к технологиям. Мы
     разрабатываем дизайны и приложения, которые не просто привлекают внимание,
     но и решают реальные задачи бизнеса. Вместе мы воплотим вашу идею в жизни,
     создавая продукт, который будет работать на вас.
    </p>
    <div className="company-facts-cards">
     {companyFacts.map(({id, title, description}) => (
        <Card key={id} title={title} description={description}/>
    ))}
    </div>
   </div>
   <img src="/images/about-company.png" alt="О компании" />
  </div>
 );
};

export default AboutCompanyPageMain;
