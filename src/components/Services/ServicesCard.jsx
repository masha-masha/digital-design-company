import React from 'react'


const ServicesCard = ( {linkToIcon, title, description}) => {
  return (
    <div className='services-card'>
     <img src={linkToIcon} alt={title} />
     <h3>{title}</h3>
     <p>{description}</p>
    </div>
  )
}

export default ServicesCard