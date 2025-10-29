import "./HeroSection.css";
import { Button, ButtonPrimary } from "../../Buttons/Buttons";

const HeroSection = () => {
 return (
  <div className="hero-section">
   <div className="hero-section__content container">
    <h1>
     Digital агенство <br /> & Design студия
    </h1>
    <p>
     Входим в топ 10 студий в России.
     <br /> Нацелены на создание эффективных цифровых решений для вашего
     бизнеса.
    </p>
    <div className="hero-section__actions">
     <Button name="О компании"/>
     <ButtonPrimary name="Расчет стоимости"/>
    </div>
   </div>
  </div>
 );
};

export default HeroSection;
