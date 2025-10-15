const PortfolioCard = ({ linkToImage, title, description }) => {
 return (
  <li className="portfolio-item">
   <img src={linkToImage} alt={title} />
   <h3>{title}</h3>
   <p>{description}</p>
  </li>
 );
};

export default PortfolioCard;
