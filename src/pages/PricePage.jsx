import "./Pages.css";
import TitlePricePage from "../components/PricePageComponents/TitlePricePage/TitlePricePage";
import MainPricePage from "../components/PricePageComponents/MainPricePage/MainPricePage";

const PricePage = () => {
  return (
    <div className="price-page">
      <div className="container">
        <TitlePricePage/>
        <MainPricePage/>
      </div>
    </div>
  )
}

export default PricePage