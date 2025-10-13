const ServicesCard = ({ linkToIcon, title, description }) => {
 return (
  <li className="services-item">
   <img src={linkToIcon} alt={title} />
   <h3>{title}</h3>
   <p>{description}</p>
  </li>
 );
};

export default ServicesCard;
