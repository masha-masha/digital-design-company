import HeroSection from "../components/HeroSection/HeroSection";
import Companies from "../components/Companies/Companies";
import Services from "../components/Services/Services";
import Survey from "../components/Survey/Survey";
import Price from "../components/Price/Price";
import Portfolio from "../components/Portfolio/Portfolio";
import ProjectDiscussion from "../components/ProjectDiscussion/ProjectDiscussion";

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