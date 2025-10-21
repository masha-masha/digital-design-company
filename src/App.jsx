import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Companies from "./components/Companies/Companies";
import Services from "./components/Services/Services";
import Survey from "./components/Survey/Survey";
import Price from "./components/Price/Price";
import Portfolio from "./components/Portfolio/Portfolio";
import ProjectDiscussion from "./components/ProjectDiscussion/ProjectDiscussion";
import Footer from "./components/Footer/Footer";

function App() {


  return (
    <>
    <Header/>
    <main>
    <HeroSection/>
    <Companies/>
    <Services/>
    <Survey/>
    <Price/>
    <Portfolio/>
    <ProjectDiscussion/>
    </main>
    <Footer/>
    </>
  )
}

export default App
