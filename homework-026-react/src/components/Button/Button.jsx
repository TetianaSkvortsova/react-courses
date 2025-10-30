import './Button.css';

export default function Button({text, toggle}) {

    return (
        <button className="button" onClick={toggle}>{text}</button>
    )
}