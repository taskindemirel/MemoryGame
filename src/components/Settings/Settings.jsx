import React from 'react';
import PropTypes from 'prop-types';
import { CATEGORIES, CATEGORIESTR, PACE, INITIAL_CARDS_COUNT } from './../../constants';
import RadioBox from './../RadioBox/RadioBox';
import styles from './Settings.module.css';
import { useState } from 'react';
import Counter from '../Counter/Counter';

const Settings = ({ startGame }) => {
    // const [category, setCategory] = useState(null);
    const [categoryTR, setCategoryTR] = useState(CATEGORIESTR[0]);
    const [pace, setPace] = useState(PACE[0]);
    const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

    let category 
    if (categoryTR === 'soyut') category ='abstract';
    if (categoryTR === 'insanlar') category ='people';
    if (categoryTR === 'hayvanlar') category ='animals';
    if (categoryTR === 'doğa') category = 'nature';


    const onStartGameClick = () => {
        startGame({ category, pace, cardsCount });
    };


    return (
        <div className={`${styles.settings} frosted`}>
            <h2>Oyun Ayarları</h2>
            <h4>Resim Kategorisi</h4>
            <div className={`${styles.setting}`}>
                {CATEGORIESTR.map((item, idx) => (
                    <RadioBox
                        key={idx}
                        name={item}
                        selectedItem={categoryTR}
                        onChange={e => setCategoryTR(e.target.value)}
                    />
                ))}
            </div>

            <h4>Kart Sayısı</h4>
            <div className={`${styles.setting}`}>
                <Counter cardsCount={cardsCount} setCardsCount={setCardsCount} />
            </div>

            <h4>Zorluk Derecesi</h4>
            <div className={`${styles.setting}`}>
                {PACE.map((item, idx) => (
                    <RadioBox key={idx} name={item} selectedItem={pace} onChange={e => setPace(e.target.value)} />
                ))}
            </div>

            <button className={`${styles.button}`} onClick={onStartGameClick}>
                Başla
            </button>
        </div>
    );
};

export default Settings;

Settings.propTypes = {
    startGame: PropTypes.func.isRequired,
};
