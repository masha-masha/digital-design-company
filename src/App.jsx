import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Companies from "./components/Companies/Companies";
import Services from "./components/Services/Services";
import Survey from "./components/Survey/Survey";
import Price from "./components/Price/Price";
import Portfolio from "./components/Portfolio/Portfolio";

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
    </main>
    </>
  )
}

export default App
