import React from 'react';
import PropTypes from 'prop-types';

import styles from './Result.module.css';

const Result = ({ restartGame, attempt }) => (
    <div className={`${styles.container} frosted`}>
        <p className={styles.great}>{attempt} </p>
        <p className={styles.attempt}>
            denemede kazandınız, tebrikler! 
        </p>
        <button className={`${styles.button}`} onClick={restartGame}>
            Yeniden Oyna
        </button>
    </div>
);

export default Result;

Result.propTypes = {
    restartGame: PropTypes.func.isRequired,
};
