import './HeroCSS.css';

const HeroSection = () => {
 return (
  <div className='hero-section'>
   <div className='hero-section__content container'>
    <h1>Digital агенство & Design студия</h1>
    <p>
     Входим в топ 10 студий в России. Нацелены на создание эффективных цифровых
     решений для вашего бизнеса.
    </p>
    <div className='hero-section__actions'>
     <button>О компании</button>
     <button>Расчет стоимости</button>
    </div>
   </div>
  </div>
 );
};

export default HeroSection;
