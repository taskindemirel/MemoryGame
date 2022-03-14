import Image from './../Image/Image'
import PropTypes from 'prop-types';

import styles from './Card.module.css';

const Card = ({card, onCardClick}) => {

    const onClick = () => {
        if (card.isShown || card.isFound) return
        onCardClick(card.uniqueId)
    }



    return (
        <div className={`${styles.container}`} onClick={onClick}>
             {/* <Image url={card.url} /> */}
            <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
                <div className={`${styles.front} ${card.isFound ? styles.found : ''}`}></div>
                <div className={`${styles.back}`}>
                    <Image url={card.url} />
                </div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    url: PropTypes.string.isRequired,
    isShown: PropTypes.bool.isRequired,
    uniqueId: PropTypes.number.isRequired,
    isFound: PropTypes.bool.isRequired
}
