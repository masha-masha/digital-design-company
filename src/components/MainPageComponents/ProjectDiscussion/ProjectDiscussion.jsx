import "./ProjectDiscussion.css";
import { Button, ButtonPrimary } from "../../Buttons/Buttons";

const ProjectDiscussion = () => {
 return (
  <div className="project-discussion">
   <div className=" project-discussion__content">
    <div className="project-discussion__title">Давайте начнем работу</div>
    <div className="project-discussion__subtitle">
     Расскажите нам о своем проекте
    </div>
    <div className="project-discussion__description">
     Мы детально обсудим ваши потребности, предложим идеи и лучшие варианты для
     сотрудничества.
    </div>
    <div className="project-discussion__actions">
        <Button name="Как мы работаем"/>
        <ButtonPrimary name="Заполнить заявку"/>
    </div>
   </div>
  </div>
 );
};

export default ProjectDiscussion;
