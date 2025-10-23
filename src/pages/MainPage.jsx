import HeroSection from "../components/MainPageComponents/HeroSection/HeroSection";
import Companies from "../components/MainPageComponents/Companies/Companies";
import Services from "../components/MainPageComponents/Services/Services";
import Survey from "../components/MainPageComponents/Survey/Survey";
import Price from "../components/MainPageComponents/Price/Price";
import Portfolio from "../components/MainPageComponents/Portfolio/Portfolio";
import ProjectDiscussion from "../components/MainPageComponents/ProjectDiscussion/ProjectDiscussion";

const MainPage = () => {
  return (
    <div>
    <HeroSection/>
    <Companies/>
    <Services/>
    <Survey/>
    <Price/>
    <Portfolio/>
    <ProjectDiscussion/>
    </div>
  )
}

export default MainPage