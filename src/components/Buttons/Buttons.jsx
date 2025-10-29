import "./Button.css"

export const ButtonPrimary = ({ name }) => {
 return <button className="button button--primary"> {name}</button>;
};

export const Button = ({ name }) => {
    return <button className="button">{name}</button>
};
