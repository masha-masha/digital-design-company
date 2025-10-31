import React from 'react'

const BlogPageCard = ({image, hashtags, title, description, date}) => {
  return (
    <div className="blog-page-card">
       <img src={image} alt=""/>
       <div className="hashtags">
         {hashtags.map((hashtag) => <span>{hashtag}</span>)}
       </div>
       <h4>{title}</h4>
       <p>{description}</p>
       <span>{date}</span>
    </div>
  )
}

export default BlogPageCard