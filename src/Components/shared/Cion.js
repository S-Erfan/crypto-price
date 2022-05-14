import React from 'react';

//stylesheet
import styles from '../styles/Cion.module.css';


const Cion = ({dataCion}) => {

    const {market_cap_rank, name, symbol, current_price, price_change_percentage_24h, market_cap, image} = dataCion

    return (
        <div className={styles.containerCion}>
            <span className={styles.numberCount}>{market_cap_rank}</span>
            <div className={styles.namedCoin}>
                <img src={image} alt={name} />
                <span>{name}</span>
            </div>
            <span className={styles.symbolCoin}>{symbol.toUpperCase()}</span>
            <span className={styles.price}>${current_price.toLocaleString()}</span>
            <span
                className={price_change_percentage_24h < 0 ? styles.toDown : styles.toUp}
            >{price_change_percentage_24h.toFixed(2)}%</span>
            <span className={styles.marketCap}>${market_cap.toLocaleString()}</span>
        </div>
    );
};

export default Cion;