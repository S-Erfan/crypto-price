import React from 'react';
//gif
import spinner from '../../image/loader.gif';
//stylesheet
import styles from '../styles/Loader.module.css';


const Loader = () => {
    return (
        <div className={styles.container}>
            <img src={spinner} alt='Loader' />            
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;