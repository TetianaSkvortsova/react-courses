import React, {useState} from 'react';
import './Card.css';

function Card({image, getLikes, winner}) {

    const [clickCounter, setClickCounter] = useState(0);
    const handleClick = () => {
        setClickCounter(clickCounter + 1);
        getLikes(image.id, clickCounter + 1);
    }

    return (
        <div className={`card ${winner === parseInt(image.id, 10) ? 'highlight' : 'no-highlight'}`}>
            <div id={image.id} className="counter">
                <span className="no-select-class">{clickCounter}</span>
            </div>
            <span className="picture no-select-class">{image.unicode}</span>
            <div className="like" onClick={handleClick}>
                <span className="heart-icon no-select-class"> &#x2764;</span>
            </div>
        </div>
    );
}

export default Card;