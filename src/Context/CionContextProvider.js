import React, { useEffect, useState, createContext } from 'react';

//API
import { getCoin } from '../services/api';

export const cionData = createContext()

const CionContextProvider = ({children}) => {

    const [data, setData] = useState([]);

    useEffect(()=> {

        const getApiFetch = async () => {
            setData(await getCoin());
        };

        getApiFetch();

    }, [])

    return (
        <cionData.Provider value={data}>
            {children}
        </cionData.Provider>
    );
};

export default CionContextProvider;