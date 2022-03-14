import useGetImages from './../../hooks/useGetImages';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader'
import Card from './../Card/Card'
import Result from './../Result/Result'
import styles from './Board.module.css';
import { useState, useEffect } from 'react';
import useGameLogic from '../../hooks/useGameLogic';

const Board = ({gameOptions, restartGame}) => {

    const [isLoading, setIsLoading] = useState(true)

    const images = useGetImages(gameOptions);
    const {cards, onCardClick, isWin, attempt} = useGameLogic(images, gameOptions.pace)

    useEffect(() => {
      if (images.length > 0) setIsLoading(false)
    }, [images])

    return (
        <div>
            {isWin && <Result restartGame={restartGame} attempt={attempt} />}
            {isLoading && <Loader />}
            {!isLoading && (
                <div className={`${styles.board}`}>
                    {cards.map(card => <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />)}
                </div>
            )}
        </div>
    );
};

export default Board;

Board.propTypes = {
    gameOptions: PropTypes.shape({
        pace: PropTypes.string.isRequired,
        cardsCount: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired
    }),
    restartGame: PropTypes.func.isRequired
}
