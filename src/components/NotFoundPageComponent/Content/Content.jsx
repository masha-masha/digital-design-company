import "./Content.css";
import { Link } from "react-router-dom";

const Content = () => {
 return (
  <div className="not-fount-content container">
   <img src="/images/404-illustation.png" alt="404" />
   <h2>Страница не найдена</h2>
   <p>Похоже такой страницы не существует или она была удалена</p>
   <button className="button button--primary">
    <Link to="/">Вернуться на главную</Link>
   </button>
  </div>
 );
};

export default Content;
