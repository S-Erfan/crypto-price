import React, { useContext, useState } from 'react';

//context 
import { cionData } from '../Context/CionContextProvider';

//components
import Cion from './shared/Cion';
import Loader from './shared/Loader';

//stylesheet
import styles from './styles/Landing.module.css'

const Landing = () => {

    const data = useContext(cionData);

    const [search, setSearch]= useState("");

    const searchHandler = event => {
        setSearch(event.target.value);
    }

    const searchData = data.filter(coin=> coin.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className={styles.container}>
            <input 
                type='text' 
                placeholder='Search'
                value={search}
                onChange={searchHandler}
            />
            {
                !data.length ?
                <Loader className={styles.loader} /> :
                <div className={styles.coinsShow}>
                    {searchData.map(cion => <Cion key={cion.id} dataCion={cion}/>)}
                </div>
            }
        </div>
    );
};

export default Landing;