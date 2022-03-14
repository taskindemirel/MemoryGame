import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

const STEP = 2

const Counter = ({cardsCount, setCardsCount}) => {

    const onDecrement = (e) => {
      e.preventDefault()
      const number = cardsCount - STEP
      if (number >=2) setCardsCount(number)
    }

    const onIncrement = (e) => {
      e.preventDefault()
      const number = cardsCount + STEP
      if (number <= 160) setCardsCount(number)
    }

    return (
        <div className="quantity">
            <button className="minus" onClick={onDecrement}>-</button>
            <span className="quantity">{cardsCount}</span>
            <button className="plus" onClick={onIncrement}>+</button>
        </div>
    );
};

export default Counter;

Counter.propTypes = {
    cardsCount: PropTypes.number.isRequired,
    setCardsCount: PropTypes.func.isRequired
}