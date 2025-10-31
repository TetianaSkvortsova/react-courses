import React, {useState} from 'react'
import './App.css'
import Card from "../Card/Card.jsx";

const getWinner = (setVoted, setWinner, cardLikesCounter) => {
    return () => {
        setVoted(true);

        const likes = Object.keys(cardLikesCounter);
        if (likes.length > 0) {

            const winnerIndex = likes.reduce((a, b) => {
                return cardLikesCounter[a] > cardLikesCounter[b] ? a : b;
            });

            setWinner(parseInt(winnerIndex, 10));
        }
    }
}

const loadData = (setUnicode) => {
    return async () => {
        const response = await fetch('images.json');
        const result = await response.json();
        setUnicode(result);
    }
}

function App() {
    const [unicode, setUnicode] = useState([]);

    const [cardLikesCounter, setCardLikesCounter] = useState({});
    const getLikes = (id, likes) => {
        setCardLikesCounter((prevCounter) => {
            return {
                ...prevCounter,
                [id]: likes
            }
        });
    }

    const [winner, setWinner] = useState(0);
    const [voted, setVoted] = useState(false);

    return (
        <>
            {unicode.length === 0 &&
                <button type='button' onClick={loadData(setUnicode)}>Load Data</button>
            }

            {
                unicode.length > 0 && (
                    <>
                        {
                            voted && (
                                <div className={`no-winners card ${!winner ? 'shown' : 'hidden'}`}>
                                    No winners yet!
                                </div>
                            )
                        }

                        <div className="cards">
                            {unicode.map((item) =>
                                <Card
                                    image={item}
                                    key={item.id}
                                    getLikes={getLikes}
                                    winner={winner}
                                />)}
                        </div>
                        <button type="button" className="winner no-select-class" onClick={getWinner(setVoted, setWinner, cardLikesCounter)}>Winner</button>
                    </>
                )
            }
        </>
    )
}

export default App
