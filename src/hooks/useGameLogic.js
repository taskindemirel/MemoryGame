import { useState, useEffect } from 'react';
import { getFormedData, getPairedPics, addUniqueIds, shuffleCards } from '../utils/index';

const maxVisibleCards = 2;
const paces = {
    kolay: 1500,
    orta: 1000,
    zor: 500,
    uzman: 200
}

const useGameLogic = (images, gamePace) => {
    const [attempt, setAttempt] = useState(0)
    const [score, setScore] = useState(0)
    const [isWin, setIswin] = useState(false)
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const prepareCards = () => {
        const a = getFormedData(images);
        const b = getPairedPics(a);
        const c = addUniqueIds(b);
        const d = shuffleCards(c);
        setCards(d);
    };

    const flipCard = clickedCardId => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true;
            }

            if (card.isShown) setVisibleCards(oldState => [...oldState, card.uniqueId]);
            return card;
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        if (visibleCards.length < maxVisibleCards) {
            flipCard(clickedCardId);
        }
    };

     const updateScore = () => {
       setScore(oldScore => oldScore + 1)
     }

    const updateAttempt = () => {
        setAttempt(oldAttempt => oldAttempt + 1)
    }

    const checkMatch = () => {
        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1)
        
        const matched = visible[0].id === visible[1].id

        const updatedCards = cards.map(card => { 
            if(visibleCards.indexOf(card.uniqueId) !== -1) {
                card.isShown = false
                card.isFound = matched
            } 

            return card
      })
      setTimeout(() => {
        setVisibleCards([])
        updateAttempt()
        if (matched) updateScore()
      }, paces[gamePace])
    }

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [images]);

    useEffect(() => {
      if (visibleCards.length >= maxVisibleCards) {
          checkMatch()
      }
    }, [visibleCards])

    console.log(attempt)

    useEffect(() => {
      if (images.length && score === images.length) {
          setIswin(true)
      }
    }, [score])

    return { cards, onCardClick, isWin, attempt };
};

export default useGameLogic;
