import "./BlogPageTitle.css";
import { Button } from "../../Buttons/Buttons";

const namesForButtons = ["Об IT", "Новости компании", "Полезные знания", "Про маркетинг", "Про дизайн", "Про разработку"];

const BlogPageTitle = () => {
  return (
    <div className="blog-page-title container">
      <h1>Наш блог</h1>
      <p>Здесь мы делимся полезными знаниями и новостями компании.</p>
      <div className="buttons-container">
        {namesForButtons.map((name) => 
          <Button name={name}/>
        )}
      </div>
    </div>
  )
}

export default BlogPageTitle;